<script>
import { usersComputed } from '@state/helper/users'
import Activity from './activity.vue'
import Notifications from './notifications.vue'
import QuickProfile from './quickProfile.vue'

export default {
  components: {
    Activity,
    Notifications,
    QuickProfile,
  },
  data() {
    return {
      handlers: {
        mouseup: this.itemClicked,
      },
      showActivity: false,
      showNotifications: false,
      quickProfile: false,
    }
  },
  computed: {
    ...usersComputed,
  },
  methods: {
    itemClicked(evt) {
      evt.preventDefault()
      evt.stopImmediatePropagation()
      const eventData = { ...evt.currentTarget.dataset }

      switch (eventData.action) {
        case 'activity':
          this.showActivity = !this.showActivity
          break;
        case 'notifications':
          this.showNotifications = !this.showNotifications
          break;
        default: // quick profile
          this.quickProfile = !this.quickProfile
          break;
      }
      // this.$router.push(eventData.name)
    },
  }
}
</script>

<template>
  <div class="slim-header-right">
    <div class="dropdown dropdown-a" v-on="handlers" data-action="activity">
      <span class="header-notification" data-toggle="dropdown">
        <BaseIcon name="bolt" source="ionicon" class="icon main ion-ios-bolt-outline" />
      </span>
      <Activity :show="showActivity" />
    </div><!-- dropdown -->
    <div class="dropdown dropdown-b" v-on="handlers" data-action="notifications">
      <span class="header-notification" data-toggle="dropdown">
        <BaseIcon name="bell" source="ionicon" class="icon main ion-ios-bell-outline" />
        <span class="indicator"></span>
      </span>
      <Notifications :show="showNotifications" />
    </div><!-- dropdown -->
    <div class="dropdown dropdown-c" v-on="handlers" data-action="quickProfile">
      <span class="logged-user" data-toggle="dropdown">
        <img src="http://via.placeholder.com/500x500" alt="">
        <span>{{ user }}</span>
        <BaseIcon name="chevron-down" class="down-menu-chevron"/>
      </span>
      <QuickProfile :show="quickProfile" />
    </div><!-- dropdown -->
  </div>
</template>

<style lang="scss" scoped>
.header-notification {
  &:hover, &:focus {
    background-color: transparent;
    .icon {
      &.main {
        &::before {
          color: #dee2e6;
        }
      }
    }
    .indicator {
      background-color: #dee2e6;
      border-color: #dee2e6;
    }
  }
}
.down-menu-chevron {
  font-size: .7rem;
}
</style>