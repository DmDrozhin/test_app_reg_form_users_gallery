<template>
  <footer class="ui-comp-footer footer">
    <div class="footer__container">
        <ui-loader class="footer__loader"></ui-loader>
        <div class="footer__post-form block">

          <div class="block__wrapper">
            <div class="block__title">{{ formTitle }}</div>
            <div class="block__container">
              <form class="block__ui-form ui-form" name="user-post" @submit.prevent.stop>
                
                <ui-custom-input
                  class="ui-form__name"
                  v-model="newPost.userName"
                  :inputData="formData.user"
                ></ui-custom-input>
                
                <ui-custom-input
                  class="ui-form__email"
                  v-model="newPost.email"
                  :inputData="formData.email"
                ></ui-custom-input>
                
                <ui-custom-input
                  class="ui-form__phone"
                  v-model="newPost.phone"
                  :inputData="formData.phone"
                ></ui-custom-input>

                <div class="ui-form__radio-wrapper">
                  <p class="ui-form__radio-title">
                    Select your position
                  </p>
                  <ui-custom-input-radio
                    class="ui-form__inp-radio"
                    :inputData="formData.radio"
                    @pickedRadio="this.newPost.job = $event"
                  ></ui-custom-input-radio>
                </div>

                <div class="ui-form__upload-block block">
                  <div class="block__wrapper">
                  
                    <ui-custom-input-button
                      class="block__button"
                      :inputData="formData.button"
                      @uploadClk="handleClick($event)"
                    ></ui-custom-input-button>

                    <ui-custom-input-txt-area
                      class="block__textarea"
                      :inputData="formData.uploadURL"
                      v-model="newPost.photoURL"
                  
                    ></ui-custom-input-txt-area>
                  
                  </div>
                </div>

                <ui-button-main
                  class="ui-form__sign-up-button"
                  :isDisabled="false"
                  :title="'Sing up'"
                  @buttonClick="handleClick('signup')"
                >{{ btnNameBot }}
                </ui-button-main> 
                
              </form>
            </div>
          </div>
        </div>
      </div>
    <ui-comp-reg-success v-if="isSuccess"></ui-comp-reg-success>
  </footer>
</template>

<script>
import uiCompRegSuccess from '@/components/ui-comp-reg-success.vue'
import uiLoader from '@/components/UI/ui-loader.vue'
import { mapGetters } from 'vuex'
export default {
  components: { uiCompRegSuccess, uiLoader },
  name: 'ui-comp-footer',
  data() {
    return{
      formTitle: 'Working with POST request',
      isSuccess: true,
      // ***************
      newPost: { 
        id: 0,
        userName: 'user name',
        job: '',
        userJob: '',
        email: 'user email',
        phone: 'user phone',
        photoURL: '',
        isValid: true,
        tech: ''
      },
      userProfession: ''
    }
  },
  computed: {
    ...mapGetters(['formData'])
  },
  // watch: {
  //   'newPost.job'(stalo, bylo) {
  //     console.log('new value', stalo)
  //     console.log('old value', bylo)
  //   }
  // },

  methods: {
    handleClick(val) {
      console.log(val) 
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-comp-footer, 
.footer{

  background-color: $bg-color1;
  &__container {
    position: relative;
    @include container-width;
    margin: 0 auto;
  }
  &__loader {
      position: fixed;
      top: 3rem;
      right: 3rem;
    }
  &__post-form,
  .block {
    // &__wrapper {
    // }
    &__title {
      text-align: center;
      @include heading1;
      padding-top: 140px;
      margin-bottom: 50px;
    }
    &__container {
      position: relative; // ?
      // @include gide-lines;
      // width: 380px;
      margin: 0 auto;
      @include media('min', 'sm') { width: 328px; }
      @include media('min', 'md') { width: 380px; }
      // margin: auto;
    }
    &__ui-form, 
    .ui-form {
      padding-bottom: 100px;
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
      &__upload-block, 
      .block {
        margin-bottom: 50px;
        // temp
        &__test-btn {
          position: absolute;
          top: -20px;
          right: 0px;
          // @include media('min', 'sm') { width: 245px; }
          // @include media('min', 'md') { width: 297px; }
          &:before {
            content: 'test';
            position: absolute;
            left: -25px;
            top: -5px;
          }
        }
        // / temp

        &__wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          // &__button { }
        }
        &__textarea {
          flex: 1;
        }
      }
      &__sign-up-button {
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>