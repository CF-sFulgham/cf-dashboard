<script>
import ItemsLayout from '@viewLayouts/Items/items.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home page container.' }],
  },
  components: { ItemsLayout },
  computed: {
    routePath(){
      console.log(this.$route)
      return this.$route.name;
    }
  }
}
</script>

<template>
  <ItemsLayout>
  </ItemsLayout>
</template>
