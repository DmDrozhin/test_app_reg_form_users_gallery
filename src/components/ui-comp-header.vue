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
              :title="btnTopName"
              @buttonClick="handleClick()"
            >{{ btnTopName }}</ui-button-main>
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

      btnTopName: 'sign up',
      isDisabled: false,
    }
  },
  methods: {  
    handleClick() { console.log('header button clicked') }
  },
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
    // background-blend-mode: multiply;
    background-position-x: center;
    background-position-y: 85%;
    background-size: 210%;
    background-repeat: no-repeat;
    @include media('min', 'sm') { 
      background-position: -448px -316px;
      background-size: 1233px 819px;
    }
    @include media('min', 'md') { 
      background-position: -958px -316px;
      background-size: 2638px 819px;
    }
    @include media('min', 'lg') { 
      background-position: -1267px -413px;
      background-size: 3500px 1068px;

    }
    @include media('min', 'xl') { 
      background-position: -695px -843px;
      background-size: 2560px 1705px;

    }
    &__container{
      height: 100%;
      @include header-top-pds;
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