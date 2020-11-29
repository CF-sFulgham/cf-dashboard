<template>
  <div class="signin-wrapper">
    <form @submit.prevent="userLogin">
      <div class="signin-box">
        <h2 class="slim-logo">
          <img class="cfLogo" alt="logo" src="@assets/images/brand_logo.png" />
        </h2>
        <h2 class="greeting">
          <span class="signin-title-primary">Welcome back!</span>
          <br />
          <span class="signin-title-secondary">Sign in to continue.</span>
        </h2>
        

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

<style lang="scss" scoped>
.slim-logo {
  text-align: center;
  .cfLogo {
    width: 100%;
    max-width: 275px;
  }
}

.greeting {
  margin-bottom: 1.5rem;

  .signin-title-primary {
    font-size: 1.3rem;
  }

  .signin-title-secondary {
    font-size: 1.4rem;
    color: #3b8dbb;
  }
}

.btn-signin {
  margin-bottom: 0;
  background-color: #4ea4d2;
  &:hover,
  &:active {
    background-color: #3987b5;
    border-color: #3987b5;
  }
}
</style>

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