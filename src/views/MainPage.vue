<template>
  <div class="main-page page">
    <div class="page__container">
      <!-- <ui-comp-header></ui-comp-header>
      <ui-comp-main></ui-comp-main> -->
      <ui-comp-footer></ui-comp-footer>
    </div>
  </div>
</template>

<script>
import uiCompHeader from '@/components/ui-comp-header.vue'
import uiCompMain from '@/components/ui-comp-main.vue'
import uiCompFooter from '@/components/ui-comp-footer.vue'

export default {
  components: { uiCompHeader, uiCompMain, uiCompFooter },
  name: 'main-page',
  data() {
    return {
      
    }
  },
  computed: {},
  methods: {
    handleClick() { console.log('main page bottom button') }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.main-page, 
.page {
  &__container {
    height: 100%;
    // @include tech-mark;
  }
}
</style>
