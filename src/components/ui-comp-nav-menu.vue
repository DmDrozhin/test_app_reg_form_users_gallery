<template>
  <div class="ui-comp-nav-menu menu">
    <div class="menu__container">
      <div class="menu__wrapper">
        <a href="#header">
          <div class="menu__img"></div>
        </a>
        <div class="menu__nav nav">
          <a href="#main">
            <ui-button-main
              class="menu__ui-button"
              :isDisabled="isDisabled"
              :title="btnNav1Name"
              >
                {{ btnNav1Name }}
              </ui-button-main>
          </a>
          <a href="#footer">
            <ui-button-main
              class="menu__ui-button"
              :isDisabled="isDisabled"
              :title="btnNav2Name"
            >
              {{ btnNav2Name }}
            </ui-button-main>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uiButtonMain from './UI/ui-button-main.vue'
export default {
  components: { uiButtonMain },
  name: 'ui-comp-nav-menu',
  data() {
    return{
      btnNav1Name: 'users',
      btnNav2Name: 'sign up',
      isDisabled: false,
    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.ui-comp-nav-menu, 
.menu {
  background-color: $bg-color2;
  height: $nav-height;
  &__container {
    height: inherit;
    margin: auto;
  }
  &__wrapper {
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  &__img {
    width: 104px;
    height: 26px;
    background-image: $bg-main-icon;
  }
  &__nav, 
  .nav {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    // &__ui-button {}
  }
}
</style>