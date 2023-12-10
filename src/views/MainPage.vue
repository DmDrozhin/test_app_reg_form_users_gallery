<template>
  <div class="main-page page">
    <div class="page__container">
      <comp-header></comp-header>
      <comp-main></comp-main>
      <comp-footer></comp-footer>
    </div>
  </div>
</template>

<script>
import CompHeader from '@/components/comp-header.vue'
import CompMain from '@/components/comp-main.vue'
import CompFooter from '@/components/comp-footer.vue'

export default {
  components: { CompHeader, CompMain, CompFooter },
  name: 'main-page',
  data() {
    return {
    }
  },
  computed: {},
  methods: {
    handleClick() { console.log('main page bottom button') },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.main-page, 
.page {
  &__container {
    height: 100%;
    scroll-behavior: smooth;
    // @include tech-mark;
  }
}
</style>
