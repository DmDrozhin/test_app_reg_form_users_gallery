<template>
  <div class="main-page page">
    <div class="page__container">

      <header class="page__header header">
        <div class="header__container">
          <div class="header__wrapper">
            <h1 class="header__title">{{ title }}</h1>
            <p class="header__title-adds">{{ titleAdds }}</p>
            <ui-button-main
              class="header__button"
              :isDisabled="false"
              :title="button1"
              @buttonClick="handleClick()"
            ></ui-button-main>
          </div>
        </div>
      </header>

      <main class="page__main main">
        <div class="inputs__upload upload">
              <br><hr><br>
              <ui-comp-upload
              ></ui-comp-upload>
            </div>

      </main>

      <footer class="page__footer">
        <section class="footer__post-wrapper post">
          <div class="post__inputs-wrapper inputs">

            <div class="inputs__upload upload">
              <br><hr><br>
              <ui-comp-upload
              ></ui-comp-upload>
            </div>
            <br><br><hr><br><br>
          </div>
        </section>
      </footer>

    </div>
  </div>
</template>

<script>
import uiInputTextarea from '../components/UI/ui-input-textarea.vue'

export default {
  components: { uiInputTextarea },
  name: 'main-page',
  data() {
    return {
      title: 'test assignment for front-end developer',
      titleAdds: 'What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\'ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.',
      button1: 'Sing up',
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
    @include tech-mark;
  }
  &__header, 
  .header {
    flex: 0 1 auto; // don't take
    @include header-height;
    background-image: $bg-main-image;
    background-color: $bg-dimmer;
    background-blend-mode: multiply;
    background-position-x: center;
    background-position-y: 85%;
    background-size: 210%;
    background-repeat: no-repeat;
    @include media('min', 'sm') { 
      background-position-y: -380px;
      background-size: 390%;
    }
    @include media('min', 'md') { 
      background-position-y: 86%; 
      background-size: 210%;
    }
    @include media('min', 'lg') { background-position-y: 85%; }
    &__container{
      height: 100%;
      @include container-paddings;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // border: 2px dotted rgb(105, 113, 255);
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 380px;
      text-align: center;
      color: #fff;
      // border: 2px dotted hotpink;

    }
    &__title {
      @include heading1;
      color: inherit;
      margin-bottom: 21px;
    }
    &__title::first-letter {
      text-transform: capitalize;
    }
    &__title-adds {
      @include body16;
      color: inherit;
      margin-bottom: 32px;
    }
    &__button {

    }
  }
  &__main, 
  .main {
    @include container-paddings;
    flex: 1 0 auto;
    background-color: #ffffff77;
  }
  &__footer, 
  .footer{
    @include container-paddings;
    flex: 0 1 auto;
    // @include container;
    &__post-wrapper, 
    .posts {
      &__inputs-wrapper, 
      .inputs {
        &__upload, 
        .upload {
          &__btn {}
          &__inp {}
        }
      }
    }
  }
}
</style>