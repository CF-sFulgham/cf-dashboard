<script>
import { layoutComputed } from '@state/helper/layout'
import Breadcrumbs from './breadcrumb.vue'

export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      
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
        <!-- <BaseIcon name="chevron-left" :class="$style.chevronPosition"/> -->
      </li>
      <Breadcrumbs :routes="navigationRoutes" />
    </ol>
    <h6 class="slim-pagetitle">{{ page.title }}</h6>
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

<style lang="scss" scoped>
.breadcrumb-item {
  a {
    &:hover {
      color: #6c757d
    }
  }
}     
</style>
