<template>
  <div class="app">
    <div class="app__container">
      <router-view
        class="app__router-screen"
      />
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
  .app {
    &__container {
      @include container;
    }
    // &__router-screen {}
  }
</style>
