<script>
import Content from '@viewLayouts/Content/content.vue'
import DetailsLayout from '@viewLayouts/Details/details.vue'
import Loader from '@components/Loading/_loading.vue'
import { PAGE_STATE } from '@utils/enums'
import { apiComputed } from '@state/helper/api'

export default {
  components: {
    DetailsLayout,
    Content,
  }
}
</script>
<style lang="scss" module>

</style>
<template>
  <DetailsLayout />
</template>
