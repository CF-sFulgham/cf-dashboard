<script>
import Options from '@components/Settings/Components/options.vue'
import { layoutComputed } from '@state/helper/layout'

export default {
  components: {
    Options,
  },
  data() {
    return {
      showSettings: false,
      options: {
        skin: {
          title: 'Skin Mode',
          options: [
            {name: 'skin-light-mode'},
            {name: 'skin-dark-mode'},
          ]
        },
        radio: {
          sticky: {
            sidebar: {
              title: 'Sticky Sidebar',
              options: [
                {name: 'sticky-sidebar', value: 'yes'},
                {name: 'sticky-sidebar', value: 'no'},
              ]
            },
            header: {
              title: 'Sticky Header',
              options: [
                {name: 'sticky-header', value: 'yes', checked: this.settings.stickyHeader},
                {name: 'sticky-header', value: 'no', checked: this.settings.stickyHeader},
              ]
            }
          },
          page: {
            title: 'Page Wide',
            options: [
              {name: 'full-width', value: 'yes', checked: this.settings.fullWidth},
              {name: 'full-width', value: 'no', checked: this.settings.fullWidth},
            ]
          },
          navigation: {
            title: 'Navigation Layout',
            options: [
              {name: 'nav-layout', value: 'Navbar'},
              {name: 'nav-layout', value: 'Sidebar'},
            ]
          }
        },
      }
    }
  },
  computed: {
    ...layoutComputed,
  },
  methods: {
    toggleMenu(evt) {
      evt.preventDefault()
      this.showSettings = !this.showSettings
    },
  },
}
</script>

<template>
  <aside class="template-options-wrapper" :class="showSettings ? 'show' : ''">
    <a href="" class="template-options-btn" @click="toggleMenu">
      <BaseIcon name="cog" />
    </a>

    <div class="template-options-inner">
      <h1 class="template-option-logo">eRoster.</h1>
      <h6 class="template-options-title">Page settings</h6>

      <Options :options="options.skin.options" :title="options.skin.title" mode="skin"/>
      <Options :options="options.radio.sticky.header.options" :title="options.radio.sticky.header.title" mode="radio"/>
      <Options :options="options.radio.page.options" :title="options.radio.page.title" mode="radio"/>
      <!-- <Options :options="options.radio.navigation.options" :title="options.radio.navigation.title" mode="radio-d"/>
      <Options :options="options.radio.sticky.sidebar.options" :title="options.radio.sticky.sidebar.title" mode="radio"/> -->
    </div>
  </aside>
</template>
