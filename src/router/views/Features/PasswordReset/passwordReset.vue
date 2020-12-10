<script>
import firebase from "firebase";
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
        password: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>

<template>
  <div class="signin-wrapper">
    <form @submit.prevent="forgetPassword">
      <div class="signin-box">
        <h2 class="slim-logo">
          <img class="cfLogo" alt="logo" src="@assets/images/brand_logo.png" />
        </h2>
        <h2 class="greeting">
          <span class="signin-title-primary">Reset Password!</span>
          <br />
          <span class="signin-title-secondary">Please enter your email</span>
        </h2>
        

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your email"
            v-model="user.email"
          /> </div
        ><!-- form-group -->
        <button type="submit" class="btn btn-primary btn-block btn-signin"
          >Get New Password</button
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

