<template>
  <div class="app">
    <div class="app__nav nav">
      <div class="nav__container">
        <ui-comp-nav-menu class="nav__ui-nav"></ui-comp-nav-menu>
      </div>
    </div>
    <div class="app__container">
      <router-view />
    </div>
  </div>

</template>

<script>
import uiCompNavMenu from './components/ui-comp-nav-menu.vue'
export default {
  components: { uiCompNavMenu },
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
  .app {
    &__nav, 
    .nav {
      width: 100%;
      background-color: $bg-color2;
      &__container {
        margin: 0 auto;
        @include container-width;
      }
      // &__ui-nav {

      // }
    }
    &__container {
      height: 100vh;
      @include general-width;
      margin: 0 auto;
    }
    // &__ui-nav { }
    // &__router-screen { }
  }
</style>
