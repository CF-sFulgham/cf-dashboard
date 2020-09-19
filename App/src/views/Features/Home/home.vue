<script>
import Layout from '@viewLayouts/main.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home page container.' }],
  },
  components: { Layout },
  computed: {
    routePath(){
      console.log(this.$route)
      return this.$route.name;
    }
  }
}
</script>

<template>
  <Layout>
  </Layout>
</template>
