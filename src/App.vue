<template>
  <div class="app">
    <ui-comp-nav-menu class="app__ui-nav"></ui-comp-nav-menu>
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
    &__container {
      height: 100vh;
      display: flex;
      justify-content: center;
      // @include container-width;
    }
    // &__ui-nav { }
    // &__router-screen { }
  }
</style>
