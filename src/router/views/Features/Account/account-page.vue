<script>
import Content from '@viewLayouts/Content/content.vue'
import Dashboard from '@viewLayouts/Account/account.vue'
import DetailsLayout from '@viewLayouts/Details/details.vue'

export default {
  data() {
    return {
      user: null,
    }
  },
  page: {
    title: 'Account',
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
