<script>
import Content from '@viewLayouts/Content/content.vue'
import ItemsLayout from '@viewLayouts/Items/items.vue'
import Loader from '@components/Loading/_loading.vue'
import ClassHeader from '@viewFeatures/Classes/Components/classHeader.vue'
import ClassItems from '@viewFeatures/Classes/Components/classItems.vue'
import { PAGE_STATE } from '@utils/enums'
import { apiComputed } from '@state/helper/api'
import {
  classesMethods,
  classesComputed,
  stateComputed,
} from '@state/helper/classes'

export default {
  page: {
    title: 'Classes',
    meta: [
      {
        name: 'description',
        content: 'Select a class from the list of available classes.',
      },
    ],
  },
  components: {
    Content,
    Loader,
    ItemsLayout,
    ClassHeader,
    ClassItems
  },
  data() {
    return {
      classes: [],
    }
  },
  created() {
    this.resetClasses()
    if (this.apiState === 'LOADED') this.getClasses()
  },
  computed: {
    ...classesComputed,
    ...apiComputed,
    ...stateComputed,
    Loaded() {
      return this.pageState === PAGE_STATE.LOADED
    },
    Loading() {
      return (
        this.pageState === PAGE_STATE.LOADING ||
        this.pageState === PAGE_STATE.INIT
      )
    },
    Error() {
      return this.pageState === PAGE_STATE.ERROR
    },
    routePath() {
      return this.$route.name
    },
  },
  watch: {
    apiState(value) {
      if (value === 'LOADED') this.getClasses()
    },
  },
  methods: {
    ...classesMethods,
    getClasses() {
      const _self = this
      _self.fetchClasses().then((response) => {
        if (response) {
          _self.filterClasses()
        }
      })
    },
  },
}
</script>

<template>
  <ItemsLayout>
    <Loader v-if="Loading" />
    <Content>
      <ClassHeader :classes="pastClasses" header-class="mg-t-30" timeframe="P" />
      <ClassItems :classes="pastClasses" timeframe="P" />

      <ClassHeader :classes="currentClasses" header-class="mg-t-50" timeframe="C" />
      <ClassItems :classes="currentClasses" timeframe="C" />

      <ClassHeader :classes="upcomingClasses" header-class="mg-t-50" timeframe="U" />
      <ClassItems :classes="upcomingClasses" timeframe="U" />
    </Content>
  </ItemsLayout>
</template>
