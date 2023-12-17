<template>
  <div class="app">
    <div class="app__nav nav">
      <div class="nav__container">
        <ui-comp-nav-menu class="nav__ui-nav"></ui-comp-nav-menu>
        
      </div>
      <ui-loader class="nav__loader" v-if="isLoading"></ui-loader>
    </div>
    <div class="app__container">
      <router-view />
    </div>
  </div>

</template>

<script>
import uiCompNavMenu from './components/ui-comp-nav-menu.vue'
import uiLoader from './components/UI/ui-loader.vue'
import { mapGetters } from 'vuex';
export default {
  components: { uiCompNavMenu, uiLoader },
  name: 'App',
  computed: {
    ...mapGetters('serverData', { isLoading1: 'isLoading' }),
    ...mapGetters('regData', { isLoading2: 'isLoading' }),
    isLoading() {return this.isLoading1 || this.isLoading2 ? true : false }
  }
}
</script>

<style lang="scss" scoped>
  .app {
    position: relative;
    &__nav,
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: $bg-color2;
      z-index: 99;
      &__container {
        margin: 0 auto;
        @include container-width;
      }
      // &__ui-nav { }
      &__loader {
        position: fixed;
        top: calc(100vh / 2);
        right: calc(100vw / 2);
        z-index: 99;
      }
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
