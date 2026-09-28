export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const callNowExcerpt = Vue.computed(() => {
      const warnings = selectedItem.value?.warnings || '';
      const excerpt = warnings.split(/[,;]/, 1)[0].trim();
      return excerpt.endsWith('.') ? excerpt : `${excerpt}.`;
    });

    return {
      itemsStore,
      selectedItem,
      callNowExcerpt,
    };
  },
  template: /* html */ `
    <section class="visit-detail-page py-4">
      <router-link to="/items" class="btn btn-link ps-0 mb-3">← Back to collection</router-link>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading item details...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
        Item not found.
      </div>

      <article v-else class="visit-detail">
        <header class="visit-detail-header">
          <h1 class="visit-detail-title">{{ selectedItem.title }}</h1>
          <p class="visit-detail-date">{{ selectedItem.date }}</p>
        </header>

        <p class="visit-detail-clinician"><strong>Clinician:</strong> {{ selectedItem.clinician }}</p>

        <aside class="call-now-strip" aria-labelledby="call-now-title">
          <h2 id="call-now-title">If this happens, call</h2>
          <p>{{ callNowExcerpt }}</p>
          <p class="call-now-emergency">If you think this is an emergency, call 911.</p>
        </aside>

        <section class="visit-detail-section">
          <h2>Why you came</h2>
          <p>{{ selectedItem.reason }}</p>
        </section>
        <section class="visit-detail-section">
          <h2>What we found</h2>
          <p>{{ selectedItem.findings }}</p>
        </section>
        <section class="visit-detail-section">
          <h2>What to do at home</h2>
          <p>{{ selectedItem.homeSteps }}</p>
        </section>
        <section class="visit-detail-section">
          <h2>Medicines</h2>
          <p>{{ selectedItem.medicines }}</p>
        </section>
        <section class="visit-detail-section">
          <h2>Follow-up</h2>
          <p>{{ selectedItem.followUp }}</p>
        </section>
        <section class="visit-detail-section visit-detail-warnings">
          <h2>Full warning signs</h2>
          <p>{{ selectedItem.warnings }}</p>
        </section>
        <p class="visit-detail-updated"><strong>Last updated:</strong> {{ selectedItem.lastUpdated }}</p>
      </article>
    </section>
  `,
};
