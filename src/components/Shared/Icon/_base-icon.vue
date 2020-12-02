<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library as fontAwesomeIconLibrary } from '@fortawesome/fontawesome-svg-core'
import camelCase from 'lodash/camelCase'

// https://fontawesome.com/icons
fontAwesomeIconLibrary.add(
  require('@fortawesome/free-solid-svg-icons/faSync').definition,
  require('@fortawesome/free-solid-svg-icons/faUser').definition,
  require('@fortawesome/free-solid-svg-icons/faSpinner').definition,
  require('@fortawesome/free-solid-svg-icons/faCog').definition,
  require('@fortawesome/free-solid-svg-icons/faCalendar').definition,
  require('@fortawesome/free-solid-svg-icons/faClock').definition,
  require('@fortawesome/free-solid-svg-icons/faChevronLeft').definition,
  require('@fortawesome/free-solid-svg-icons/faUserClock').definition,
  require('@fortawesome/free-solid-svg-icons/faChevronDown').definition,
)

export default {
  components: {
    FontAwesomeIcon,
  },
  inheritAttrs: false,
  props: {
    source: {
      type: String,
      default: 'font-awesome',
    },
    name: {
      type: String,
      required: true,
    }
  },
  computed: {
    // Gets a CSS module class, e.g. iconCustomLogo
    customIconClass() {
      return this.$style[camelCase('icon-custom-' + this.name)]
    },
  },
}
</script>

<template>
  <FontAwesomeIcon
    v-if="source === 'font-awesome'"
    v-bind="$attrs"
    :icon="name"
  />
  <span
    v-else-if="source === 'custom'"
    v-bind="$attrs"
    :class="customIconClass"
  />
  <i
    v-else-if="source === 'ionicon'"
    v-bind="$attrs"
  />
</template>

<style lang="scss" scoped>
  i[class$="outline"] {
    &::before {
      font-weight: 600;
    }
  }
</style>
