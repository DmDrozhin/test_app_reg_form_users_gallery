<template>
  <div class="main-page page">
    <div class="page__wrapper">
      <header class="page__header header">
        <h1 class="header__title">{{ title }}</h1>
        <p class="header__title-adds">{{ titleAdds }}</p>
      </header>
      <main class="page__main main">
        <ui-button-main></ui-button-main>
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
  
      titleAdds: 'What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\'ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.'
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
  // &__wrapper {}
  &__header, 
  .header {
    height: 650px;
    background-image: $bg-main-image;
    // background-position: center center;
    // background-size: cover;
    // background-repeat: no-repeat no-repeat;
    // backdrop-filter: blur(20px) grayscale(80%) brightness(100%);
    &__title {
      @include heading1;
      text-transform: capitalize;
      color: #fff;
    }
    &__title-adds {
      @include body16;
      color: #fff;
    }
  }
  &__main, 
  .mian {}
  &__footer, 
  .footer{
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