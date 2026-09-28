import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const visitFlagsStorageKey = 'visitfile-visit-flags';

function readVisitFlags() {
  try {
    const savedFlags = JSON.parse(localStorage.getItem(visitFlagsStorageKey) || '{}');
    return {
      pinned: savedFlags.pinned || {},
      bookmarked: savedFlags.bookmarked || {},
      useful: savedFlags.useful || {},
    };
  } catch {
    return { pinned: {}, bookmarked: {}, useful: {} };
  }
}

function saveVisitFlags(flags) {
  try {
    localStorage.setItem(visitFlagsStorageKey, JSON.stringify(flags));
  } catch {
    // The app still works for this session when browser storage is unavailable.
  }
}

const app = Vue.createApp({
  setup() {
    const savedFlags = Vue.reactive(readVisitFlags());
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
      isPinned(id) {
        return Boolean(savedFlags.pinned[id]);
      },
      isBookmarked(id) {
        return Boolean(savedFlags.bookmarked[id]);
      },
      isUseful(id) {
        return Boolean(savedFlags.useful[id]);
      },
      togglePinned(id) {
        savedFlags.pinned[id] = !savedFlags.pinned[id];
        saveVisitFlags(savedFlags);
      },
      toggleBookmarked(id) {
        savedFlags.bookmarked[id] = !savedFlags.bookmarked[id];
        saveVisitFlags(savedFlags);
      },
      markUseful(id) {
        savedFlags.useful[id] = true;
        saveVisitFlags(savedFlags);
      },
    });

    fetch('items-template.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load CSV data file.');
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data, errors }) => {
            if (errors.length > 0) {
              itemsStore.error = 'There was a problem reading the CSV data.';
              itemsStore.items = [];
            } else {
              itemsStore.items = data.map((row) => {
                const title = String(row.title || '').trim();
                const reason = String(row.reason || '').trim();

                return {
                  id: String(row.id || '').trim(),
                  title,
                  date: String(row.date || '').trim(),
                  clinician: String(row.clinician || '').trim(),
                  reason,
                  findings: String(row.findings || '').trim(),
                  homeSteps: String(row.home_steps || '').trim(),
                  medicines: String(row.medicines || '').trim(),
                  followUp: String(row.follow_up || '').trim(),
                  warnings: String(row.warnings || '').trim(),
                  lastUpdated: String(row.last_updated || '').trim(),
                  name: title,
                  description: reason,
                };
              });
              itemsStore.error = '';
            }
            itemsStore.isLoading = false;
          },
          error: () => {
            itemsStore.error = 'There was a problem parsing CSV data.';
            itemsStore.items = [];
            itemsStore.isLoading = false;
          },
        });
      })
      .catch(() => {
        itemsStore.error = 'There was a problem loading data.';
        itemsStore.items = [];
        itemsStore.isLoading = false;
      });

    Vue.provide('itemsStore', itemsStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
