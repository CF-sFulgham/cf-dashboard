<script>
import { formatDateSlash, formatTime } from '@utils/date'
import { sessionsMethods } from '@state/helper/sessions'

export default {
   props: {
    sessions: {
      type: Array,
      required: true,
      default: () => [],
    },
    timeframe: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  data() {
    return {
      handlers: {
        mouseup: this.itemClicked,
      }
    }
  },
  methods: {
    ...sessionsMethods,
    itemClicked(evt){
      const selectedSession = {...evt.currentTarget.dataset}
      const filteredSession = this.sessions.filter(session => session.sessionId === selectedSession.sessionId)
      if(!filteredSession.length) return

      const session = filteredSession[0];
      this.selectSession({session})

      if(selectedSession.timeframe === 'U') return

      this.saveSelectedSession({session})
      this.$router.push('checkin')
    },
    formatDate(date){
      const formattedDate = date.replace(/-/g, '\/')
      const newDate = new Date(formattedDate)

      return formatDateSlash(newDate)
    },
    timeFormat(time){
      const newTime = new Date(Date.parse(`1900-01-01T${time.replace(/\./g, ':')}`))
      return formatTime(newTime)
    },
    timeOfDay(time){
      const timePart = parseInt(time.substring(0, 2).replace('0', ''), 10);
      let tod = ''
      switch(true){
        case timePart < 12:
          tod = 'Morning'
          break
        case timePart >= 12 && timePart < 17:
          tod = 'Afternoon'
          break
        case timePart >= 17 && timePart <= 24:
          tod = 'Evening'
          break
      }
      return tod;
    }
  }
}
</script>

<template>
  <section>
    <article v-for="(item, idx) in sessions" :key="`${idx}-${timeframe}`" :data-session-id="item.sessionId" :data-timeframe="timeframe" v-on="handlers">
      <div class="dash-headline" :class="idx !== 0 ? 'mg-t-20' : ''">
        <div class="dash-headline-full">
          <div class="dash-headline-item-one regular bd bd-0">
            <!-- content -->
            <div class="dash-item-overlay" :class="$style[`bg${timeframe}`]">
              <ul :class="$style.itemFormat">
                <li :class="$style[`bg${timeframe}`]">
                  <h1>
                    <span> Session {{ item.sessionName }}</span>
                  </h1>
                  <h2>
                    <BaseIcon name="calendar" :class="$style.iconSpacer" />
                    {{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }}
                  </h2>
                  <h2>
                    <BaseIcon name="clock" :class="$style.iconSpacer" />
                    {{ timeFormat(item.startTime) }} - {{ timeFormat(item.endTime) }}
                  </h2>
                </li>
                <!-- time of day Morning | Afternoon | Evening -->
                <li :class="$style.todPos">
                  <ul v-if="timeframe === 'C'" :class="$style.actionFormat">
                    <li>
                      <span :class="$style.tod">{{ timeOfDay(item.startTime) }}</span>
                    </li>
                    <li>

                    </li>
                  </ul>
                </li>
                <!-- action required -->
                <li :style="item.classTimeframe !== 'P' ? 'display: none;' : ''">
                  <ul v-if="item.classTimeframe === 'P'" :class="$style.actionFormat">
                    <li>
                      <div v-if="!item.finalized" :class="$style.actionRequired">
                        <span>Action Required</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- col-3 -->
          </div>
        </div>
        <!-- row -->
      </div>
    </article>
  </section>
</template>

<style lang="scss" module>
.actionRequired {
  min-width: 100px;
  color: #b51f2e;
}
.tod {
  min-width: 100px;
  color: #1c9806;
}
.iconSpacer {
  margin-right: .5rem;
}
.itemFormat {
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    &.bgP,
    &.bgC,
    &.bgU {
      border: none;
      h1, h2 {
        span {
          &.spacer {
            padding-left: 51px;
          }
        }
      }
    }
    &.bgP {
      h1, h2 {
        color: #b51f2e;
        span {
          color: #b51f2e;
        }
      }
    }
    &.bgC {
      h1, h2 {
        color: #1c9806;
        span {
          color: #1c9806;
        }
      }
    }
    &.bgU {
      h1, h2 {
        color: #3b7eca;
        span {
          color: #3b7eca;
        }
      }
    }
    &.todPos,
    &:last-child {
      align-self: flex-start;
      margin-left: auto;
    }
  }
}
.actionFormat {
  list-style-type: none;
}
.bgC,
.bgP {
  cursor: pointer;
}
.bgP {
  border: 1px solid #dc3545;
  &:hover {
    background-color: #f7d1d5;
  }
}
.bgU {
  border: 1px solid #5B93D3;
}
.bgC {
  border: 1px solid #23BF08;
  &:hover {
    background-color: #bcfcb1;
  }
}
</style>
