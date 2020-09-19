<script>
// import { rosterMethods } from '@state/componentHelper'

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

  // created() {
  //   this.fetchRoster({ username: 'steven' }).then((response) => {
  //     console.log(response)
  //   })
  // },
  // methods: {
  //   ...rosterMethods,
  // },
  // computed: {
  //   ...authComputed,
  // },
}
</script>

<template>
  <div class="slim-navbar">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="page-messages.html">
            <i class="icon ion-ios-chatboxes-outline"></i>
            <span>Check-In</span>
            <!-- <span class="square-8"></span> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="page-messages.html">
            <i class="icon ion-ios-chatboxes-outline"></i>
            <span>Roster</span>
            <!-- <span class="square-8"></span> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="widgets.html">
            <i class="icon ion-ios-analytics-outline"></i>
            <span>Notes</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- container -->
  </div>
</template>

<style lang="scss" module>
@import '@sass';
</style>
