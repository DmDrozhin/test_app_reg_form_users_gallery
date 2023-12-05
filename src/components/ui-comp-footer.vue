<template>
  <footer class="ui-comp-footer footer">
    <div class="footer__container">
        <ui-loader class="footer__loader"></ui-loader>
        <div class="footer__post-form block">

          <div class="block__wrapper">
            <div class="block__title">{{ formTitle }}</div>
            <div class="block__container">
              <form class="block__ui-form ui-form" name="user-post">
                
                <ui-custom-input
                  class="ui-form__name"
                  :isError="false"
                  :placeholder="newPost.name"
                ></ui-custom-input>
                
                <ui-custom-input
                  class="ui-form__email"
                  :isError="false"
                  :placeholder="newPost.email"
                ></ui-custom-input>
                
                <ui-custom-input
                  class="ui-form__phone"
                  :isError="false"
                  :placeholder="newPost.phone"
                ></ui-custom-input>

                <div class="ui-form__radio-wrapper">
                  <p class="ui-form__radio-title">Select your position</p>
                  <ui-custom-input-radio
                    class="ui-form__inp-radio"
                  ></ui-custom-input-radio>
                </div>
                
                <ui-comp-upload-block
                  class="ui-form__upload-block"
                  :isError="false"
                  :placeholder="newPost.photo"
                ></ui-comp-upload-block>
                <ui-button-main
                class="ui-form__inp-button"
                  :isDisabled="false"
                  :title="btnNameBot"
                  @buttonClick="handleClick()"
                >{{ btnNameBot }}</ui-button-main>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    <ui-comp-reg-success v-if="ifSuccess"></ui-comp-reg-success>
  </footer>
</template>

<script>
import uiCompRegSuccess from '@/components/ui-comp-reg-success.vue'
import uiLoader from '@/components/UI/ui-loader.vue'
export default {
  components: { uiCompRegSuccess, uiLoader },
  name: 'ui-comp-footer',
  data() {
    return{
      formTitle: 'Working with POST request',
      btnNameBot: 'Sing up',
      ifSuccess: true,
      
      // ***************
      newPost: {
        id: '',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        position: 'Frontend developer',
        photo: 'photo url',
        isDisabled: false,
      }
    }
  },
  methods: {
    handleClick() { console.log('main page bottom button') }
  },
  computed: { }
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
    &__wrapper {
    }
    &__title {
      text-align: center;
      @include heading1;
      padding-top: 140px;
      margin-bottom: 50px;
    }
    &__container {
      position: relative;
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
      &__radio-wrapper {

      }
      &__radio-title {
        @include body16;
        margin-bottom: 10px;
      } 
      &__inp-radio {
        margin-bottom: 47px;
      }
      &__upload-block {
        margin-bottom: 50px;
      }
      &__inp-button {
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>