<script>
import { alertComputed, alertMethods } from '@state/helper/alert'

export default {
  props: {
    type: {
      type: String,
      required: true,
      default: 'info',
    },
    dismiss: {
      type: Boolean,
      required: false,
      default: false,
    },
    timer: {
      type: Number,
      required: false,
      default: null,
    },
    message: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {}
  },
  watch: {
    show(showAlert) {
      if (showAlert && !this.dismiss && this.timer) this.dismissTimer()
    },
  },
  computed: {
    ...alertComputed,
    getClass() {
    },
  },
  methods: {
    ...alertMethods,
    dismissTimer() {
      setTimeout(() => {
        this.hideAlert()
      }, this.timer)
    },
  },
}
</script>

<template>
  <div>
    <v-alert
      v-if="dismiss"
      v-model="show"
      dismissible
      :type="type"
      elevation="2"
      transition="slide-x-transition"
      v-bind="$attrs"
      :icon="false"
    >
      {{ message }}
    </v-alert>
    <v-alert
      v-else
      v-model="show"
      :type="type"
      :class="getClass"
      elevation="2"
      transition="slide-x-transition"
      v-bind="$attrs"
      :icon="false"
    >
      {{ message }}
    </v-alert>
  </div>
</template>

<style lang="scss" scoped>
</style>