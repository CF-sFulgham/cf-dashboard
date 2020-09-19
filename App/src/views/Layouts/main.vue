<script>
import InfoHeader from '@components/InfoHeader/info-header.vue'
import NavBar from '@components/Nav/nav-bar.vue'

export default {
  components: {
    InfoHeader,
    NavBar,
  },
}
</script>

<template>
  <main>
    <InfoHeader />
    <NavBar />
    <slot />
  </main>
</template>

<style lang="scss" module>
@import '@sass';
</style>
