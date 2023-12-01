<template>
  <div class="app">
    <div class="app__top-strip"></div>
    <ui-comp-nav-menu class="app__ui-nav"></ui-comp-nav-menu>
    <div class="app__container">
      <router-view class="app__router-screen"/>
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
      @include tech-mark;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    &__top-strip {
      background-color: $strip-color;
      height: 60px;
    }
    &__ui-nav {
      @include container-paddings;
    }
    // &__router-screen { }
  }
</style>
