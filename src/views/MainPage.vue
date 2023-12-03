<template>
  <div class="main-page page">
    <div class="page__container">

      <ui-comp-header></ui-comp-header>

      <main class="page__main main">
        <div class="main__container">
          <div class="inputs__upload upload">

            <br><hr><br>
            <br><hr><br>

          </div>
        </div>
      </main>

      <footer class="page__footer footer">
        <div class="footer__container">
          <div class="footer__post-form form">
            <div class="form__wrapper">
              <div class="form__title">{{ formTitle }}</div>
              <div class="form__container">
                <div class="form__inputs-block">
                  <br><hr><br>
                  <ui-comp-upload-block></ui-comp-upload-block>
                  <br><br><hr><br><br>

                  <ui-custom-input-2></ui-custom-input-2>
                  <br><br><hr><br><br>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include container-width;
    // @include tech-mark;
  }


  &__main, 
  .main {
    flex: 1;
    min-height: 500px;

    &__container {
      min-height: inherit;
      @include container-paddings;
      background-color: $bg-color1;
    }
  }
  &__footer, 
  .footer{
    @include container-paddings;
    // @include container;
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
    &__container {}
    &__post-form,
    .form {
      &__wrapper {

      }
      &__title {
        text-align: center;
        @include heading1;
      }
      &__container {
        box-sizing: content-box;
        @include gide-lines;
        width: 390px;
        margin: auto;
      }
      &__inputs-block {}
    }
  }
}


</style>