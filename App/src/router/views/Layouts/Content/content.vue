<script>
import BreadcrumbList from '@components/Breadcrumb/breadcrumb-list.vue'
export default {
  components: {
    BreadcrumbList,
  },
}
</script>

<template>
  <section class="slim-mainpanel">
    <div class="container">
      <BreadcrumbList />
      <slot />
    </div>
  </section>
</template>
