<script>
import InfoHeader from '@components/InfoHeader/info-header.vue'
import Settings from '@components/Settings/settings.vue'
import InfoFooter from '@components/InfoFooter/info-footer.vue'

export default {
  components: {
    InfoHeader,
    Settings,
    InfoFooter
  },
}
</script>

<template>
  <div>
    <InfoHeader />
    <Settings />
    <slot />
    <InfoFooter />
  </div>
</template>
