<script>
export default {
  page: {
    title: 'Loading data...',
    meta: [{ name: 'description', content: 'Loading page data...' }],
  },
}
</script>

<template>
  <Transition appear>
    <BaseIcon :class="$style.loadingIcon"  size="2x" name="spinner" spin />
  </Transition>
</template>

<style lang="scss" module>
.loadingIcon {
  display: block;
  margin: 0 auto;
  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter-active) {
    transition: opacity 1s;
  }
  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter) {
    opacity: 0;
  }
}
</style>
