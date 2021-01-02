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
      isValidEmail: true,
      isValidPassword: true,
      emailErrors: [],
      passwordErrors: [],
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
    isValidForm(){
      return !( this.user.email !== '' &&
                this.isValidEmail === true &&
                this.user.password !== '' &&
                this.isValidPassword === true )
    }
  },
  methods: {
    ...authMethods,
    ...alertMethods,
    ...usersMethods,
    userLogin() {
      const _self = this
      this.login({ email: this.user.email, password: this.user.password })
    },
    requestPasswordReset() {
      this.$router.push('/auth/reset')
    },
    validator({ evt, name }){
      const val = (evt.target.value || evt.currentTarget.value)
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let hasError = false

      switch (name) {
        case 'email':
          this.emailErrors = []

          if(val === '') {
            hasError = true
            this.emailErrors.push('E-Mail is required.')
          }

          if(!emailRegex.test(val)){
            hasError = true
            this.emailErrors.push('Not a valid e-mail address.')
          }

          this.user.email = val
          this.isValidEmail = !hasError
          break;
      
        default:
          this.passwordErrors = []

          if(val === '') {
            hasError = true
            this.passwordErrors.push('Password is required.')
          }

          this.user.password = val
          this.isValidPassword = !hasError
          break;
      }
    }
  },
}
</script>

<template>
  <div class="signin-wrapper">
    <form>
      <div class="signin-box">
        <h2 class="slim-logo">
          <img class="cfLogo" alt="logo" src="@assets/images/brand_logo.png" />
        </h2>
        <h2 class="greeting">
          <span class="signin-title-primary">Welcome back!</span>
          <br />
          <span class="signin-title-secondary">Sign in to continue.</span>
        </h2>

        <BaseInputText 
            type="text" 
            label="E-Mail" 
            name="email" 
            :isRequired="true" 
            :isValid="isValidEmail"
            :errors="emailErrors"
            @validate="validator"/>

        <BaseInputText 
            type="password" 
            label="Password" 
            name="password" 
            class="mg-b-20"
            :isRequired="true" 
            :isValid="isValidPassword"
            :errors="passwordErrors"
            @validate="validator"/>

        <Alert class="alert" type="error" :dismiss="false" :timer="6000" :message="errorMsg"/>
      
        <button type="submit" :disabled="isValidForm" class="btn btn-primary btn-block btn-signin">
          Sign In
        </button>

        <br />
        <div @click="requestPasswordReset()">
          <span class="link">I forgot my password?</span>
        </div>
        <div>
          <span class="link">I need help?</span>
        </div>
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

.link {
  text-decoration: underline;
  color: #3b8dbb;
  cursor: pointer;
  &:hover {
    color: inherit;
    text-decoration: none;
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
  &:disabled {
    cursor: not-allowed;
    &:hover,
    &:active {
      background-color: #4ea4d2;
      border-color: #4ea4d2;
    }
  }
}
</style>
