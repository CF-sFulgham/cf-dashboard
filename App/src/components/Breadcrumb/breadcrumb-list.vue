<script>
import { layoutComputed } from '@state/helper/layout'
import Breadcrumbs from './breadcrumb.vue'

export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
        {
          name: 'classes',
          title: 'Classes',
        },
      ],
    }
  },
  computed: {
    ...layoutComputed,
  },
}
</script>

<template>
  <div v-show="showBreadcrumbMenu" class="slim-pageheader">
    <ol class="breadcrumb slim-breadcrumb" :class="showBreadcrumbMenu ? $style.show : $style.hide" >
      <li :class="$style.spacer">
        <BaseIcon name="chevron-left" :class="$style.chevronPosition"/>
      </li>
      <Breadcrumbs :routes="navigationRoutes" />
    </ol>
  </div>
</template>

<style lang="scss" module>
  .show {
    visibility: visible;
  }
  .hide {
    visibility: hidden;
  }
  .spacer {
    padding-right: .2rem;
  }
  .chevronPosition {
    position: relative;
    top: 0;
    font-weight: bold;
    color: #1b84e7;
  }
</style>
