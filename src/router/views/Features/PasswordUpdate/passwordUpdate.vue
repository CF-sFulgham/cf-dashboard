<script>
import firebase from 'firebase'
export default {
  page: {
    title: 'Password Reset',
    meta: [
      {
        name: 'Password Reset.',
        content: 'This page allows users to resest their password',
      },
    ],
  },
  data() {
    return {
      user: {
        password: '',
      },
    }
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
          alert(error.message)
        })
    },
  },
}
</script>

<template>
  <div class="signin-wrapper">
    <form @submit.prevent="userLogin">
      <div class="signin-box">
        <h2 class="slim-logo">
          <img class="cfLogo" alt="logo" src="@assets/images/brand_logo.png" />
        </h2>
        <h5 class="greeting">
          <span class="updatepassword-title-secondary">Please enter your new password!</span>
        </h5>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="new password"
            v-model="user.password"
          /> </div
        ><!-- form-group -->
        <div class="form-group mg-b-50">
          <input
            type="password"
            class="form-control"
            placeholder="confirm password"
            v-model="user.confirmPassword"
          /> </div
        ><!-- form-group -->
        <button type="submit" class="btn btn-primary btn-block btn-signin"
          >Update Password</button
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

  .updatepassword-title-secondary {
    font-size: 1rem;
    font-weight: 400;
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
