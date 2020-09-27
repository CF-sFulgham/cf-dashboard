<script>
import ItemsLayout from '@viewLayouts/Items/items.vue'

export default {
  page: {
    title: '404',
    meta: [{ name: 'description', content: '404' }],
  },
  components: { ItemsLayout },
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <ItemsLayout>
    <h1 :class="$style.title">
      404
      <template v-if="resource">
        {{ resource }}
      </template>
      Not Found
    </h1>
  </ItemsLayout>
</template>

