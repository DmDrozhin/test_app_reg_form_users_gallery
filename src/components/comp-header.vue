<template>
  <div class="comp-header block" id="header">
    <header class="block__header header">
        <div class="header__container">
          <div class="header__wrapper">
            <h1 class="header__title">{{ title }}</h1>
            <p class="header__title-adds">{{ titleAdds }}</p>
            <a href="#footer">
              <ui-button-main
                class="header__button"
                :isDisabled="isDisabled"
                :title="btnTopName"
              >{{ btnTopName }}</ui-button-main>
            </a>
          </div>
        </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'comp-header',
  data() {
    return{
      title: 'test assignment for front-end developer',
      titleAdds: 'What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\'ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.',

      btnTopName: 'sign up',
      isDisabled: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.comp-header, 
  .block {
  &__header, 
  .header {
    padding-top: $nav-height;
    margin-bottom: 70px;
    @include header-height;
    @include header-bg;
    background-color: $bg-dimmer;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
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