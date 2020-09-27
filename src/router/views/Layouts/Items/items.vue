<script>
import MainLayout from '@viewLayouts/main.vue'

export default {
  components: {
    MainLayout
  },
}
</script>

<template>
  <MainLayout>
    <div :class="$style.pageStyle">
      <slot />
    </div>
  </MainLayout>
</template>

<style lang="scss" module>
  .pageStyle {
    margin-bottom: 4rem;
  }
</style>
