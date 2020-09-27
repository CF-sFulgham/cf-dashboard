<script>
import Content from '@viewLayouts/Content/content.vue'
import ItemsLayout from '@viewLayouts/Items/items.vue'
import Loader from '@components/Loading/_loading.vue'
import SessionHeader from '@viewFeatures/Sessions/Components/sessionHeader.vue'
import SessionItems from '@viewFeatures/Sessions/Components/sessionItems.vue'
import { PAGE_STATE } from '@utils/enums'
import { apiComputed } from '@state/helper/api'
import {
  sessionsMethods,
  sessionsComputed,
  stateComputed,
} from '@state/helper/sessions'

export default {
  page: {
    title: 'Sessions',
    meta: [
      {
        name: 'description',
        content: 'Select a session from the list of available sessions.',
      },
    ],
  },
  components: {
    Content,
    Loader,
    ItemsLayout,
    SessionHeader,
    SessionItems,
  },
  data() {
    return {
      sessions: [],
    }
  },
  created() {
    this.resetSessions()
    if (this.apiState === 'LOADED') this.getSessions()
  },
  computed: {
    ...sessionsComputed,
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
      if (value === 'LOADED') this.getSessions()
    },
  },
  methods: {
    ...sessionsMethods,
    getSessions() {
      const _self = this
      _self.fetchSessions().then((response) => {
        if (response) {
          _self.filterSessions()
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
      <SessionHeader header-class="mg-t-5" :sessions="pastSessions" timeframe="P" />
      <SessionItems :sessions="pastSessions" timeframe="P" />

      <SessionHeader header-class="mg-t-50" :sessions="currentSessions" timeframe="C" />
      <SessionItems :sessions="currentSessions" timeframe="C" />

      <SessionHeader header-class="mg-t-50" :sessions="upcomingSessions" timeframe="U" />
      <SessionItems :sessions="upcomingSessions" timeframe="U" />
    </Content>
  </ItemsLayout>
</template>
