<script>
import { pageErrorComputed } from '@state/helper/pageError'

export default {
  page: {
    title: 'Oops!',
    meta: [{ name: 'description', content: '404' }],
  },
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...pageErrorComputed,
  }
}
</script>

<template>
  <div class="page-error-wrapper">
    <div>
      <h1 class="error-title">
        {{ title }}
      </h1>
      <h5 class="tx-sm-24 tx-normal tx-danger">{{ h1 }}</h5>
      <p class="mg-b-30 second-heading">{{ h2 }}</p>
      <p class="mg-b-50">
        <router-link :to="route" class="btn btn-error">{{ linkText }}</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 500;
}
.second-heading {
  font-size: 1rem;
}

h1.error-title {
  margin-bottom: 2rem;
  border: none;
}
h5 {
  padding-top: 1rem;
  border-top: 2px solid #adb5bd;
}
.btn.btn-error {
  color: #fff;
  background-color: #1b84e7;
}
</style>
