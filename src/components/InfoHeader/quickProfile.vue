<script>
export default {
  components: {
  },
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
}
</script>

<template>
  <div class="dropdown-menu dropdown-menu-right" :class="{ 'show': show }" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-42px, 45px, 0px);">
        <nav class="nav">
          <a href="page-profile.html" class="nav-link"><i class="icon ion-person"></i> View Profile</a>
          <a href="page-edit-profile.html" class="nav-link"><i class="icon ion-compose"></i> Edit Profile</a>
          <a href="page-activity.html" class="nav-link"><i class="icon ion-ios-bolt"></i> Activity Log</a>
          <a href="page-settings.html" class="nav-link"><i class="icon ion-ios-gear"></i> Account Settings</a>
          <a href="page-signin.html" class="nav-link"><i class="icon ion-forward"></i> Sign Out</a>
        </nav>
      </div><!-- dropdown-menu -->
</template>

<style lang="scss" scoped>
</style>