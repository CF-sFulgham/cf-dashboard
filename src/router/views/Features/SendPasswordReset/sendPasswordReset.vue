<script>
import Alert from '@components/Alert/alert.vue'
import { authComputed, authMethods, resetMethods } from '@state/helper/auth'
import { alertMethods } from '@state/helper/alert'

export default {
  components: {
    Alert
  },
  page: {
    title: 'Password Reset Request',
    meta: [
      {
        name: 'Password reset request.',
        content: 'This page allows users to request a password reset.',
      },
    ],
  },
  data() {
    return {
      user: {
        email: '',
      },
      alertMsg: '',
      isValidEmail: true,
      emailErrors: [],
      isValidForm: false,
    }
  },
  watch: {
    hasAuthError(hasErr) {
      if (hasErr) {
        this.alertMsg = this.errorMsg
        this.showAlert()
      } else {
        this.hideAlert()
      }
    },
    hasSuccessMsg(hasMsg){
      if (hasMsg) {
        this.alertMsg = this.successMsg
        this.showAlert()
      }
    }
  },
  computed: {
    ...authComputed,
  },
  methods: {
    ...alertMethods,
    ...authMethods,
    ...resetMethods,
    reset() {
      this.requestResetPassword(this.user.email).then(() => {
        this.user.email = ''
      })
    },
    emailValidator({evt, name}){
      this.emailErrors = []
      const val = (evt.target.value || evt.currentTarget.value)
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let hasError = false

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
      this.isValidForm = !hasError
    }
  },
}
</script>

<template>
  <div>
    <div class="signin-wrapper">
      <form @submit.prevent="reset">
        <div class="signin-box">
          <h2 class="slim-logo">
            <img
              class="cfLogo"
              alt="logo"
              src="@assets/images/brand_logo.png"
            />
          </h2>
          <h2 class="greeting">
            <span class="signin-title-primary">Password Reset Request</span>
            <br />
            <span class="signin-title-secondary">Fill in required fields.</span>
          </h2>

          <BaseInputText 
            type="text" 
            label="E-Mail" 
            name="email" 
            :isRequired="true" 
            :isValid="isValidEmail"
            :errors="emailErrors"
            @validate="emailValidator"/>

          <Alert class="alert" type="error" :dismiss="false" :timer="5000" :message="alertMsg"/>

          <!-- form-group -->
          <button type="submit" :disabled="!isValidForm" class="btn btn-primary btn-block btn-reset">
            Get Password Reset E-Mail
          </button>
        </div>
        <!-- signin-box -->
      </form>
    </div>
    <!-- signin-wrapper -->
  </div>
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
    background-color: #23bf08 !important;
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

.btn-reset {
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

