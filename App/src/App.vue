<script>
const app = JSON.parse(process.env.VUE_APP_CONFIG)

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      console.log(app)
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${app.title}` : app.title
    },
  }
}
</script>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selectozr-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

/*
@import '/assets/lib/font-awesome/css/font-awesome.css';
@import '/assets/lib/Ionicons/css/ionicons.css';
@import '/assets/lib/chartist/css/chartist.css';
@import '/assets/lib/rickshaw/css/rickshaw.min.css';
*/

// Sass variables and utilities from src/sass.
@import '@sass';
</style>
