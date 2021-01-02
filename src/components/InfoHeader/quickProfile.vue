<script>
import { authComputed, authMethods } from '@state/helper/auth'

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  data() {
    return {
    }
  },
  methods: {
    ...authMethods,
  }
}
</script>

<template>
  <div class="dropdown-menu dropdown-menu-right" :class="{ 'show': show }" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-42px, 45px, 0px);">
    <nav class="nav">
      <span class="nav-link"><i class="icon ion-person"></i> View Profile</span>
      <span class="nav-link"><i class="icon ion-compose"></i> Edit Profile</span>
      <span class="nav-link"><i class="icon ion-ios-bolt"></i> Activity Log</span>
      <span class="nav-link"><i class="icon ion-ios-gear"></i> Account Settings</span>
      <span class="nav-link" @click="logout()"><i class="icon ion-forward"></i> Sign Out</span>
    </nav>
  </div><!-- dropdown-menu -->
</template>

<style lang="scss" scoped>
  .nav-link {
    cursor: pointer;
  }
</style>