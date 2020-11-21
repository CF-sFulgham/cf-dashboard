<script>
import { PAGE_STATE } from '@utils/enums'
import SpinLoader from '@components/Loading/_loadingSpinner.vue'
import { apiComputed } from '@state/helper/api'

export default {
  page: {
    title: 'App Loader',
    meta: [
      {
        name: 'description',
        content: 'The app loader loads the user session and configuration settings. Plus it looks cool.',
      },
    ],
  },
  components: {
    SpinLoader,
  },
  data() {
    return {
      classes: [],
    }
  },
  created() {
    if (this.apiState === 'LOADED') return
  },
  computed: {
    ...apiComputed,
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
  },
  watch: {
    apiState(value) {
      if (value === 'LOADED') return
    },
  },
  methods: {
  },
}
</script>

<template>
<div class="signin-wrapper">
  <div class="content">
    <img alt="Creation Foundation short logo." src="@assets/images/cfLogo.png" />
    <SpinLoader class="loader"/>
    <p> Loading your dashboard, please be patient... </p>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .signin-wrapper {
    background-color: #121a22;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      img, p {
        width: 75%;
        margin: 0 auto;
      }
      p {
        margin-top: 1rem;
        text-align: center;
      }
    }
  }
  .loader {
    margin-top: 1rem;
    color: #c9eaf5;
  }
</style>