<template>
  <footer class="ui-comp-footer footer">
    <div class="footer__container">
        <ui-loader class="footer__loader"></ui-loader>
        <div class="footer__post-form form">
          <div class="form__wrapper">
            <div class="form__title">{{ formTitle }}</div>
            <div class="form__container">
              <div class="form__inputs-block ui-inp">
                
                <ui-custom-input
                  class="ui-inp__name"
                  :isError="false"
                  :placeholder="newPost.name"
                ></ui-custom-input>
                
                <ui-custom-input
                  class="ui-inp__email"
                  :isError="false"
                  :placeholder="newPost.email"
                ></ui-custom-input>
                
                <ui-custom-input
                  class="ui-inp__phone"
                  :isError="false"
                  :placeholder="newPost.phone"
                ></ui-custom-input>
                <ui-custom-input-radio
                  class="ui-inp__inp-radio"
                ></ui-custom-input-radio>
                
                <ui-comp-upload-block
                  class="ui-inp__upload-block"
                  :isError="false"
                  :placeholder="newPost.photo"
                ></ui-comp-upload-block>
                <ui-button-main
                class="ui-inp__inp-button"
                  :isDisabled="false"
                  :title="btnNameBot"
                  @buttonClick="handleClick()"
                >{{ btnNameBot }}</ui-button-main>
                
              </div>
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
  .form {
    
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
    &__inputs-block, 
    .ui-inp {
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
      &__inp-radio {
        margin-bottom: 50px;
      }
      &__upload-block {
        margin-bottom: 53px;
      }
      &__inp-button {
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>