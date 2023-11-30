<template>
  <div class="main-page main">
    <div class="main__container header">
      <header class="header__wrapper">
        <h1 class="header__title">{{ title }}</h1>
      </header>
      <ui-button-main></ui-button-main>
    </div>

  </div>
</template>

<script>
import uiButtonMain from '@/components/ui-button-main.vue'
export default {
  name: 'main-page',
  components: { uiButtonMain },
  data() {
    return {
      title: 'this is the main page'
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
  .main-page, 
  .main {
    &__container, 
    .header {
      &__title {
        @include h1;
      }
    }
  }
</style>