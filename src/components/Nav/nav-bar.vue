<script>
import { layoutComputed } from '@state/helper/layout'
import firebase from 'firebase'
export default {
  data() {
    return {
      handlers: {
        mouseup: this.itemClicked,
      },
    }
  },

  computed: {
    ...layoutComputed,
  },

  methods: {
    itemClicked(evt) {
      evt.preventDefault()
      evt.stopImmediatePropagation()
      const eventData = { ...evt.currentTarget.dataset }

      this.$router.push(eventData.name)
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push('/login')
          })
        })
    },
  },
}
</script>



<template>
  <nav class="slim-navbar">
    <div class="container">
      <ul class="nav">
        <li v-for="(item, idx) in menuItems" :key="idx" class="nav-item" :class="{ active: item.selected }">
          <span class="nav-link" v-on="handlers" data-action="selectedNav" :data-name="item.name">
            <router-link :to="item">
            <span>{{ item.name }}</span>
            </router-link>
          </span>
        </li>
      </ul>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
.slim-navbar {
  -webkit-box-shadow: 0px 5px 4px -4px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 5px 4px -4px rgba(0, 0, 0, 0.11);
}
.nav-item {
  cursor: pointer;
  &.active {
    .nav-link {
      background-color: #fff;
      color: #3b8dbb;
      border-bottom: 1px solid;
      font-weight: 600;
    }
  }
}
</style>