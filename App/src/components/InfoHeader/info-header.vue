<script>
export default {
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
      ],
      loggedInNavRoutes: [
        {
          name: 'profile',
          title: () => 'Logged in as ' + 'me' /* this.currentUser.name */,
        },
        {
          name: 'logout',
          title: 'Log out',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="slim-header">
    <div class="container">
      <div class="slim-header-left">
        <h2 class="slim-logo"
          ><a href="index.html">Creation Foundation<span>.</span></a></h2
        > </div
      ><!-- slim-header-left -->
      <div class="slim-header-right">
        <div class="dropdown dropdown-c">
          <a href="#" class="logged-user" data-toggle="dropdown">
            <img src="@assets/images/stevenFulghamIcon.png" alt="" />
            <span>Steven</span>
            <i class="fa fa-angle-down"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <nav class="nav">
              <a href="page-profile.html" class="nav-link"
                ><i class="icon ion-person"></i> View Profile</a
              >
              <a href="page-edit-profile.html" class="nav-link"
                ><i class="icon ion-compose"></i> Edit Profile</a
              >
              <a href="page-activity.html" class="nav-link"
                ><i class="icon ion-ios-bolt"></i> Activity Log</a
              >
              <a href="page-settings.html" class="nav-link"
                ><i class="icon ion-ios-gear"></i> Account Settings</a
              >
              <a href="page-signin.html" class="nav-link"
                ><i class="icon ion-forward"></i> Sign Out</a
              >
            </nav>
          </div>
          <!-- dropdown-menu -->
        </div>
        <!-- dropdown -->
      </div>
      <!-- header-right -->
    </div>
    <!-- container -->
  </div>
  <!-- slim-header -->
</template>

<style lang="scss" module>
@import '@sass';
.slim-header {
  .container {
    nav.a:first-child {
      font-size: 1rem;
    }
  }
}
</style>
