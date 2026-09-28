export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();
    const router = VueRouter.useRouter();
    const confirmation = Vue.ref('');

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const callNowExcerpt = Vue.computed(() => {
      const warnings = selectedItem.value?.warnings || '';
      const excerpt = warnings.split(/[,;]/, 1)[0].trim();
      return excerpt.endsWith('.') ? excerpt : `${excerpt}.`;
    });

    function goBack() {
      router.push('/items');
    }

    function toggleBookmark() {
      itemsStore.toggleBookmarked(selectedItem.value.id);
      confirmation.value = itemsStore.isBookmarked(selectedItem.value.id)
        ? 'Saved to Bookmarked.'
        : 'Removed from Bookmarked.';
    }

    function togglePin() {
      itemsStore.togglePinned(selectedItem.value.id);
      confirmation.value = itemsStore.isPinned(selectedItem.value.id)
        ? 'Saved to Active care.'
        : 'Removed from Active care.';
    }

    function markUseful() {
      itemsStore.markUseful(selectedItem.value.id);
      confirmation.value = 'Marked Useful.';
    }

    return {
      itemsStore,
      selectedItem,
      callNowExcerpt,
      confirmation,
      goBack,
      toggleBookmark,
      togglePin,
      markUseful,
    };
  },
  template: /* html */ `
    <section class="visit-detail-page py-4">
      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading item details...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
        This file could not be opened. <button type="button" class="missing-file-back" @click="goBack">Go back to the list.</button>
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

        <p v-if="confirmation" class="visit-action-confirmation" role="status">{{ confirmation }}</p>
        <nav class="visit-action-bar" aria-label="Visit actions">
          <button type="button" class="visit-action" @click="goBack">Back</button>
          <button
            type="button"
            class="visit-action"
            :class="{ 'visit-action-selected': itemsStore.isBookmarked(selectedItem.id) }"
            :aria-pressed="itemsStore.isBookmarked(selectedItem.id)"
            @click="toggleBookmark">Bookmark</button>
          <button
            type="button"
            class="visit-action"
            :class="{ 'visit-action-selected': itemsStore.isPinned(selectedItem.id) }"
            :aria-pressed="itemsStore.isPinned(selectedItem.id)"
            @click="togglePin">Pin</button>
          <button
            type="button"
            class="visit-action"
            :class="{ 'visit-action-selected': itemsStore.isUseful(selectedItem.id) }"
            :aria-pressed="itemsStore.isUseful(selectedItem.id)"
            @click="markUseful">Useful</button>
        </nav>
      </article>
    </section>
  `,
};
