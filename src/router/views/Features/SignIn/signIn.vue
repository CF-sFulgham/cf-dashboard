<script>
import Alert from '@components/Alert/alert.vue'
import { authComputed, authMethods } from '@state/helper/auth'
import { alertMethods } from '@state/helper/alert'
import { usersMethods } from '@state/helper/users'

export default {
  components: {
    Alert,
  },
  page: {
    title: 'Sign In',
    meta: [
      {
        name: 'signIn.',
        content: 'This page allows users to sign into their accounts.',
      },
    ],
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  created(){
    this.resetPage()
  },
  watch: {
    hasAuthError(hasErr) {
      if (hasErr) {
        this.showAlert()
      } else {
        this.hideAlert()
      }
    },
  },
  computed: {
    ...authComputed,
  },
  methods: {
    ...authMethods,
    ...alertMethods,
    ...usersMethods,
    userLogin() {
      const _self = this
      this.login({ email: this.user.email, password: this.user.password })
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
          />
        </div>
        <!-- form-group -->
        <div class="form-group mg-b-50">
          <input
            type="password"
            class="form-control"
            placeholder="Enter your password"
            v-model="user.password"
          />

          <Alert class="alert" type="error" :dismiss="false" :timer="6000" :message="errorMsg"/>
        </div>
        <!-- form-group -->
        

        <button type="submit" class="btn btn-primary btn-block btn-signin">
          Sign In
        </button>
        <br />
        <span class="signin-title-primary">
          <a href="/#/passwordreset">Forgot Password</a>
        </span>
      </div>
      <!-- signin-box -->
    </form>
  </div>
  <!-- signin-wrapper -->
</template>

<style lang="scss" scoped>
.alert {
  border-radius: 0px !important;
  padding: 0 !important;

  >>> .v-alert {
    font-weight: 500 !important;
    padding: .594rem .75rem !important;
    font-size: 12px !important;
    letter-spacing: 1px !important;
    background-color: #dc3545 !important;
    border-radius: 0 !important;
    text-align: left;
    margin: 1rem 0 0;
    text-transform: uppercase;
  }
}



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
