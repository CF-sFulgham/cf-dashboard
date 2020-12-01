<script>
import { layoutComputed } from '@state/helper/layout'

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
  computed: {
    ...layoutComputed,
  }

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
  <nav class="slim-navbar">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="page-messages.html">
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
  </nav>
</template>

<style lang="scss" scoped>
.slim-navbar {
  -webkit-box-shadow: 0px 5px 4px -4px rgba(0,0,0,0.11); 
  box-shadow: 0px 5px 4px -4px rgba(0,0,0,0.11);
}
</style>