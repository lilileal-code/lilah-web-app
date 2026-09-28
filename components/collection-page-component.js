export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const activeFilter = Vue.ref('all');
    const sortedItems = Vue.computed(() => [...itemsStore.items].sort((first, second) => {
      return Date.parse(second.date) - Date.parse(first.date);
    }));
    const filteredItems = Vue.computed(() => sortedItems.value.filter((item) => {
      if (activeFilter.value === 'active') {
        return itemsStore.isPinned(item.id);
      }
      if (activeFilter.value === 'bookmarked') {
        return itemsStore.isBookmarked(item.id);
      }
      return true;
    }));

    return {
      itemsStore,
      activeFilter,
      filteredItems,
    };
  },
  template: /* html */ `
    <section class="collection-screen py-4">
      <div class="container collection-page">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h1 class="h4 mb-0">Visits</h1>
          <span class="small text-muted">{{ itemsStore.items.length }} visits</span>
        </div>

        <p class="collection-demo-notice border rounded p-3 mb-3" role="note">
          Sample data: These fictional visits are for demonstration only. They are not a personal medical record.
        </p>

        <nav class="visit-filters mb-3" aria-label="Visit filters">
          <button
            type="button"
            class="visit-filter"
            :class="{ 'visit-filter-selected': activeFilter === 'all' }"
            :aria-pressed="activeFilter === 'all'"
            @click="activeFilter = 'all'">All</button>
          <button
            type="button"
            class="visit-filter"
            :class="{ 'visit-filter-selected': activeFilter === 'active' }"
            :aria-pressed="activeFilter === 'active'"
            @click="activeFilter = 'active'">Active care</button>
          <button
            type="button"
            class="visit-filter"
            :class="{ 'visit-filter-selected': activeFilter === 'bookmarked' }"
            :aria-pressed="activeFilter === 'bookmarked'"
            @click="activeFilter = 'bookmarked'">Bookmarked</button>
        </nav>

        <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
          Loading visits...
        </div>

        <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
          {{ itemsStore.error }}
        </div>

        <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
          No visits found.
        </div>

          <div v-else-if="filteredItems.length > 0" class="visit-card-list">
          <router-link
            v-for="item in filteredItems"
            :key="item.id"
            :to="'/items/' + item.id"
            class="visit-card-link">
            <article class="visit-card">
              <div class="visit-card-heading">
                <h2 class="visit-card-title">{{ item.title }}</h2>
                <time class="visit-card-date" :datetime="item.date">{{ item.date }}</time>
              </div>
              <p class="visit-card-clinician">{{ item.clinician }}</p>
              <p class="visit-card-reason">{{ item.reason }}</p>
              <div v-if="itemsStore.isPinned(item.id) || itemsStore.isBookmarked(item.id)" class="visit-card-hints">
                <span v-if="itemsStore.isPinned(item.id)">Pinned</span>
                <span v-if="itemsStore.isBookmarked(item.id)">Bookmarked</span>
              </div>
            </article>
          </router-link>
        </div>

        <p v-else class="visit-empty-state">No matching visits.</p>
      </div>
    </section>
  `,
};
