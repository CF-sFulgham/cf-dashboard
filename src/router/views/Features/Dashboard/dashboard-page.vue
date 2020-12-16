<script>
import Content from '@viewLayouts/Content/content.vue'
import Dashboard from '@viewLayouts/Dashboard/dashboard.vue'
import DetailsLayout from '@viewLayouts/Details/details.vue'

export default {
  data() {
    return {
      user: null,
    }
  },
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: 'Home page container.' }],
  },
  components: {
    Content,
    Dashboard,
    DetailsLayout,
  },
}
</script>

<template>
  <DetailsLayout>
    <Content>
      <Dashboard> </Dashboard>
    </Content>
  </DetailsLayout>
</template>
