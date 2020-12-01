<script>
import Menu from './menu.vue'

export default {
  components: {
    Menu,
  }
}
</script>

<template>
  <header class="slim-header">
    <div class="container">
      <div class="slim-header-left">
        <h2 class="slim-logo">
          <img class="cfLogo" alt="logo" src="@assets/images/cfLogo_small.jpg" />
        </h2>
      </div>
      <!-- slim-header-left -->
      <div class="slim-header-right">
        <Menu />
        <!-- dropdown -->
      </div>
      <!-- header-right -->
    </div>
    <!-- container -->
  </header>
  <!-- slim-header -->
</template>

<style lang="scss" scoped>
.cfLogo {
  height: 100%;
  width: 70px;
}

.welcome {
  color: #343a40
}

.slim-header {
  background-color: #121a22;
}

body.dark {
  .welcome {
    color: #1b84e7 !important
  }
  .exclaimation {
    color: #868ba1;
  }
}
</style>
