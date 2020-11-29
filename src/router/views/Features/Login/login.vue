<script>
import LoginForm from '@viewLayouts/Forms/login-form.vue'
import firebase from 'firebase'

export default {
  components: {
    LoginForm,
  },
}
</script>

<template>
  <div id="app">
    <LoginForm />
  </div>
</template>