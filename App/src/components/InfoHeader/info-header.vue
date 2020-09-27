<script>
import { usersGetters } from '@state/helper/users'

export default {
  computed: {
    ...usersGetters,
  }
}
</script>

<template>
  <header class="slim-header">
    <div class="container">
      <div class="slim-header-left">
        <h2 class="slim-logo">
          <a href="index.html">Creation Foundation<span>.</span> </a>
        </h2>
      </div>
      <!-- slim-header-left -->
      <div class="slim-header-right">
        <span class="welcome" :class="$style.welcome">Welcome back, {{ user }}<span class="exclaimation">!</span></span>
        <!-- dropdown -->
      </div>
      <!-- header-right -->
    </div>
    <!-- container -->
  </header>
  <!-- slim-header -->
</template>

<style lang="scss" module>
.welcome {
  color: #343a40
}
</style>

<style lang="scss">
body.dark {
  .welcome {
    color: #1b84e7 !important
  }
  .exclaimation {
    color: #868ba1;
  }
}
</style>
