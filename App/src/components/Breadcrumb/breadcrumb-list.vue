<script>
import Breadcrumbs from './breadcrumb.vue'

export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
        {
          name: 'dashboard',
          title: 'Dashboard',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="slim-pageheader">
    <ol class="breadcrumb slim-breadcrumb">
      <Breadcrumbs :routes="persistentNavRoutes" />
    </ol>
    <h6 class="slim-pagetitle">Roster</h6>
  </div>
</template>

<style lang="scss" module>
@import '@sass';
</style>
