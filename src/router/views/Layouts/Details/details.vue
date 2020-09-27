<script>
import MainLayout from '@viewLayouts/main.vue'
import NavBar from '@components/Nav/nav-bar.vue'

export default {
  components: {
    MainLayout,
    NavBar,
  },
}
</script>

<template>
  <MainLayout>
    <NavBar />
    <slot />
  </MainLayout>
</template>
