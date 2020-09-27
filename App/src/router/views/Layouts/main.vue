<script>
import InfoHeader from '@components/InfoHeader/info-header.vue'
import Settings from '@components/Settings/settings.vue'

export default {
  components: {
    InfoHeader,
    Settings
  },
}
</script>

<template>
  <div>
    <InfoHeader />
    <Settings />
    <slot />
  </div>
</template>
