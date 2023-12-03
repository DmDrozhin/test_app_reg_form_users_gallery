<template>
  <div class="main-page page">
    <div class="page__container">

      <ui-comp-header></ui-comp-header>

      <main class="page__main main">
        <div class="main__container">

        </div>
      </main>

      <footer class="page__footer footer">
        <div class="footer__container">
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
                  
                  <ui-comp-upload-block
                    class="ui-inp__upload-block"
                    :isError="false"
                    :placeholder="newPost.photo"
                  ></ui-comp-upload-block>
                  <br><hr><br>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  </div>
</template>

<script>
import uiCompHeader from '../components/ui-comp-header.vue'

export default {
  components: { uiCompHeader },
  name: 'main-page',
  data() {
    return {
      formTitle: 'Working with POST request',
      newPost: {
        id: '',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        position: 'Frontend developer',
        photo: 'photo url'
      }      
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.main-page, 
.page {
  &__container {
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    // align-items: center;

    // @include tech-mark;
  }
  &__main, 
  .main {
    flex: 1;
    min-height: 500px;
    background-color: $bg-color1;


    &__container {
      @include container-width;
      margin: 0 auto;
      min-height: inherit;
      background-color: rgb(238, 226, 197)    
    }
  }
  &__footer, 
  .footer{
    background-color: $bg-color1;
    // &__post-wrapper, 
    // .posts {
    //   &__inputs-wrapper, 
    //   .inputs {
    //     &__upload, 
    //     .upload {
    //       &__btn {}
    //       &__inp {}
    //     }
    //   }
    // }
    &__container {
      @include container-width;
      margin: 0 auto;
    }
    &__post-form,
    .form {
      &__wrapper {

      }
      &__title {
        text-align: center;
        @include heading1;
        margin-bottom: 50px;
      }
      &__container {

        // @include gide-lines;
        // width: 380px;
        margin: 0 auto;
        @include media('min', 'sm') { width: 328px; }
        @include media('min', 'md') { width: 380px; }
        // margin: auto;
      }
      &__inputs-block, 
      .ui-inp {
        &__name {
          margin-bottom: 50px;
        }
        &__email {
          margin-bottom: 50px;
        }
        &__phone {
          margin-bottom: 43px;
        }
        &__upload-block {
          margin-bottom: 43px;

        }
      }
    }
  }
}


</style>