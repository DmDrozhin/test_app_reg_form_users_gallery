<template>
  <div class="ui-comp-header block">
    <header class="block__header header">
        <div class="header__container">
          <div class="header__wrapper">
            <h1 class="header__title">{{ title }}</h1>
            <p class="header__title-adds">{{ titleAdds }}</p>
            <ui-button-main
              class="header__button"
              :isDisabled="isDisabled"
              :title="button1"
              @buttonClick="handleClick()"
            ></ui-button-main>
          </div>
        </div>
      </header>
  </div>
  
</template>

<script>
export default {
  name: 'ui-comp-header',
  data() {
    return{
      title: 'test assignment for front-end developer',
      titleAdds: 'What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\'ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.',
      button1: 'Sing up',
      isDisabled: false,
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-comp-header, 
  .block {
  &__header, 
  .header {
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
      // border: 2px dotted rgb(235, 255, 105);
      @include media('min', 'sm') { padding-top: 40px; }
      @include media('min', 'md') { padding-top: 89px; }
      @include media('min', 'lg') { padding-top: 164px; }
      @include media('min', 'xl') { padding-top: 164px; }
    }
    &__wrapper {
      margin: 0 auto;
      max-width: 380px;
      @include media('min', 'sm') { width: 328px; }
      @include media('min', 'md') { width: 380px; }
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
      margin: 0 auto;
    }
  }

}


</style>