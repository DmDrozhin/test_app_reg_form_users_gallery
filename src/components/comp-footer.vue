<template>
  <footer class="comp-footer footer" id="footer">
    <transition-group name="fade" :key="252">
      <div class="footer__container" v-if="!this.codeUser">
        <ui-loader class="footer__loader" v-if="isLoaderOn"></ui-loader>
        <div class="footer__post-form block">

        <div class="block__wrapper">
          <div class="block__title">{{ formTitle }}</div>
          <div class="block__container">
            <form 
              class="block__ui-form ui-form" 
              name="user-post" 
              @submit.prevent.stop enctype="multipart/form-data"
            >
              <ui-custom-input 
                class="ui-form__name" 
                :inputData="user"
              ></ui-custom-input>

              <ui-custom-input 
                class="ui-form__email" 
                :inputData="email"
              ></ui-custom-input>

              <ui-custom-input 
                class="ui-form__phone" 
                :inputData="phone"
              ></ui-custom-input>

              <div class="ui-form__radio-wrapper">
                <p class="ui-form__radio-title">
                  Select your position
                </p>
                <ui-custom-input-radio 
                  class="ui-form__inp-radio" 
                  :inputData="radio"
                ></ui-custom-input-radio>
              </div>

              <ui-custom-input-file 
                class="ui-form__inp-file" 
                :inputData="file"
              ></ui-custom-input-file>

              <ui-button-main 
                class="ui-form__sign-up-button" 
                :isDisabled="!formIsValid" 
                :title="'Sign up'"
                @buttonClick="handleSignUp"
              ></ui-button-main>

            </form>
          </div>
        </div>
      </div>
    </div>
    
    </transition-group>

    <transition name="fade">
      <ui-comp-reg-success v-if="this.codeUser"></ui-comp-reg-success>
    </transition>
  </footer>
</template>

<script>
import uiCompRegSuccess from '@/components/ui-comp-reg-success.vue'
import uiLoader from '@/components/UI/ui-loader.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { uiCompRegSuccess, uiLoader },
  name: 'comp-footer',
  data() {
    return {
      formTitle: 'Working with POST request',
      isLoaderOn: false,
      test: false
    }
  },
  computed: {
    ...mapGetters('serverData', ['urls']),
    ...mapGetters('regData', ['codeUser', 'codeTkn']),
    ...mapGetters('formData', ['user', 'email', 'phone', 'file', 'radio', 'formIsValid']),
  },
  watch: {
    // 'newPost.photo'(v) { console.log('new value', v) },
    // loadStat(v) { console.log(v) }
  },

  methods: {
    ...mapActions('formData', ['clearForm']),
    ...mapActions('serverData', ['getFromServ']),
    ...mapActions('regData', ['getToken', 'postNewUser']),

    async handleSignUp() {      
      if (this.formIsValid) {
        try {
          this.isLoaderOn = true
          await this.getToken()
          await this.postNewUser()
          await this.getFromServ({ url: this.urls.urlStart, idn: 'users' })
          this.clearForm()
          this.isLoaderOn = false
        }
        catch (err) {
          console.log('HandleSingUp* Err', err)
          this.isLoaderOn = false
        }
      }
    },
    runtest() {this.test = !this.test}
  },

  mounted() {
    this.getFromServ({url: this.urls.urlJobs, idn: 'jobs'})
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.comp-footer,
.footer {
  background-color: $bg-color1;

  // background-color: #d69696;
  &__container {
    padding: 70px 0 100px 0;
    position: relative;
    @include container-width;
    // margin: 0 auto;
  }

  &__loader {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }

  &__post-form,
  .block {

    // &__wrapper {
    // }
    // border: 1px solid orange;
    &__title {
      text-align: center;
      @include heading1;
      margin-bottom: 50px;
    }

    &__container {
      position: relative; // ?
      // @include gide-lines;
      // width: 380px;
      margin: 0 auto;

      @include media('min', 'sm') {
        width: 328px;
      }

      @include media('min', 'md') {
        width: 380px;
      }

      // margin: auto;
    }

    &__ui-form,
    .ui-form {
      &__name {
        margin-bottom: 50px;
      }

      &__email {
        margin-bottom: 50px;
      }

      &__phone {
        margin-bottom: 43px;
      }

      // &__radio-wrapper {

      // }
      &__radio-title {
        @include body16;
        margin-bottom: 10px;
      }

      &__inp-radio {
        margin-bottom: 47px;
      }

      &__inp-file {
        margin-bottom: 50px;
      }

      &__sign-up-button {
        margin: 0 auto;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>