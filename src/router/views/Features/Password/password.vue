<script>
import Alert from '@components/Alert/alert.vue'
import {
  authComputed,
  passwordComputed,
  authMethods,
  passwordMethods,
} from '@state/helper/auth'
import { alertMethods } from '@state/helper/alert'

export default {
  components: {
    Alert,
  },
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
        email: '',
        confirmPassword: '',
      },
      alertMsg: '',
      isValidConfirmation: true,
      isValidPassword: true,
      confirmErrors: [],
      passwordErrors: [],
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
    hasSuccessMsg(hasMsg) {
      if (hasMsg) {
        this.alertMsg = this.successMsg
        this.showAlert()
      }
    },
    email(val){
      this.user.email = val
    }
  },
  computed: {
    ...authComputed,
    ...passwordComputed,
    actionButtonLabel() {
      return this.mode === 'resetPassword'
        ? 'Reset Password'
        : 'Change Password'
    },
    getEmail() {
      return this.email
    },
    isValidForm(){
      return !( this.user.confirmPassword !== '' &&
                this.isValidConfirmation === true &&
                this.user.password !== '' &&
                this.isValidPassword === true )
    }
  },
  methods: {
    ...alertMethods,
    ...passwordMethods,
    changePassword() {
      this.mode === 'resetPassword' && (this.user.password === this.user.confirmPassword)
        ? this.sendPasswordReset(this.user.password)
        : () => {}
    },
    validator({ evt, name }){
      const val = (evt.target.value || evt.currentTarget.value)
      let hasError = false

      switch (name) {
        case 'confirm':
          this.confirmErrors = []

          if(val === '') {
            hasError = true
            this.confirmErrors.push('Please confirm your password.')
          }

          this.user.confirmPassword = val
          this.isValidConfirmation = !hasError
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
    <form @submit.prevent="changePassword">
      <div class="signin-box">
        <h2 class="slim-logo">
          <img class="cfLogo" alt="logo" src="@assets/images/brand_logo.png" />
        </h2>
        <h2 class="greeting">
          <span class="title-primary">Please enter and confirm your new password.</span>
        </h2>

        <div class="form-group" v-if="mode === 'resetPassword'">
          <input
            type="text"
            class="form-control e-mail"
            :value="getEmail"
            disabled="disabled"
          />
        </div>

        <BaseInputText 
            type="password" 
            label="Password" 
            name="password" 
            class="mg-b-20"
            :isRequired="true" 
            :isValid="isValidPassword"
            :errors="passwordErrors"
            @validate="validator"/>


        <BaseInputText 
            type="password" 
            label="Confirm Password" 
            name="confirm" 
            class="mg-b-20"
            :isRequired="true" 
            :isValid="isValidConfirmation"
            :errors="confirmErrors"
            @validate="validator"/>

        <Alert class="alert" type="error" :dismiss="false" :timer="6000" :message="alertMsg"/>
        <!-- form-group -->
        <button type="submit" :disabled="isValidForm" class="btn btn-primary btn-block btn-change-password" @click="changePassword()">
          {{ actionButtonLabel }}
        </button>
      </div>
      <!-- signin-box -->
    </form>
  </div>
  <!-- signin-wrapper -->
</template>

<style lang="scss" scoped>
.slim-logo {
  text-align: center;
  .cfLogo {
    width: 100%;
    max-width: 275px;
  }
}

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

.e-mail {
  color: #495057c7 !important;
}

.greeting {
  margin-bottom: 1.5rem;
  line-height: 1.5rem;

  .title-primary {
    font-size: 1.2rem;
    font-weight: 300;
    color: #3b8dbb;
  }

  .title-secondary {
    font-size: 1rem;
    color: #3b8dbb;
  }
}

.btn-change-password {
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
