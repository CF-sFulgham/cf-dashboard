<script>
export default {
  props: {
    headerClass: {
      type: String,
      required: false,
      default: () => ''
    },
    timeframe: {
      type: String,
      required: true,
      default: () => '',
    },
    sessions: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    headerStyle() {
      return `${this.headerClass} bg${this.timeframe}`
    },
    numberOfSessions() {
      return this.sessions.length
    },
    title() {
      let prefix = ''
      switch(this.timeframe){
        case 'P':
          prefix = 'Past'
          break
        case 'U':
          prefix = 'Upcoming'
          break
        default:
          prefix = 'Current'
      }
      const suffix = this.sessions.length === 1 ? 'Session' : 'Sessions'
      return  `${prefix} ${suffix}`
    }
  }
}
</script>

<template>
  <header class="nav-statistics-wrapper item-header" :class="headerStyle">
    <nav class="nav tx-18 thin">
      <span class="nav-link active">
        {{ numberOfSessions }} {{ title }}
      </span>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.thin {
  font-weight: 400;
}
.nav-statistics-wrapper {
  &.bgP {
    border-color: #f7d1d5;
    nav:first-child {
      span {
        &.nav-link {
          &.active {
            color: #b51f2e;
            &::before {
              bottom: -12px;
              border-color: #b51f2e;
            }
          }
        }
      }
    }
  }
  &.bgU {
    border-color: #d4e2f3;
    nav:first-child {
      span {
        &.nav-link {
          &.active {
            color: #3b7eca;
            &::before {
              bottom: -12px;
              border-color: #3b7eca;
            }
          }
        }
      }
    }
  }
  &.bgC {
    border-color: #cbf6c4;
    nav:first-child {
      span {
        &.nav-link {
          &.active {
            color: #1c9806;
            &::before {
              bottom: -12px;
              border-color: #1c9806;
            }
          }
        }
      }
    }
  }
}
</style>
