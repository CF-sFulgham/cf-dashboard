<template>
  <div class="signin-wrapper">
    <form @submit.prevent="userLogin">
      <div class="signin-box">
        <h2 class="slim-logo"
          ><a href="index.html">Creative Foundation<span>.</span></a></h2
        >
        <h2 class="signin-title-primary">Welcome back!</h2>
        <h3 class="signin-title-secondary">Sign in to continue.</h3>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your email"
            v-model="user.email"
          /> </div
        ><!-- form-group -->
        <div class="form-group mg-b-50">
          <input
            type="password"
            class="form-control"
            placeholder="Enter your password"
            v-model="user.password"
          /> </div
        ><!-- form-group -->
        <button type="submit" class="btn btn-primary btn-block btn-signin"
          >Sign In</button
        > </div
      ><!-- signin-box -->
    </form> </div
  ><!-- signin-wrapper -->
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/profile')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>