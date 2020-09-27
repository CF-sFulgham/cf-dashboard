<script>
import axios from 'axios'
import ItemsLayout from '@viewLayouts/Items/items.vue'
import LoadingView from '@components/Loading/_loading.vue'

export default {
  page: {
    title: 'Page timeout',
    meta: [
      { name: 'description', content: 'The page timed out while loading.' },
    ],
  },
  components: {
    ItemsLayout,
    LoadingView
  },
  data() {
    return {
      offlineConfirmed: false,
    }
  },
  beforeCreate() {
    axios
      .head('/api/ping')
      .then(() => {
        window.location.reload()
      })
      .catch(() => {
        this.offlineConfirmed = true
      })
  },
}
</script>

<template>
  <ItemsLayout v-if="offlineConfirmed">
    <h1 :class="$style.title">
      The page timed out while loading. Are you sure you're still connected to
      the Internet?
    </h1>
  </ItemsLayout>
  <LoadingView v-else />
</template>
