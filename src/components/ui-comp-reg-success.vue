<template>
  <div class="ui-comp-reg-success reg-success">
    <div class="reg-success__title">{{ title }}</div>
    <div class="reg-success__container">
      <div class="reg-success__wrapper">
        <div class="reg-success__image" type="image">
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ui-comp-reg-success',
  data() {
    return{
      title: 'user successfully registered'
    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.ui-comp-reg-success, 
.reg-success {
  &__container {
    width: 328px;
    margin: 0 auto;
  }
  &__wrapper {
    height: 380px;
    margin-bottom: 100px;
  }
  &__title {
    text-align: center;
    @include heading1;
    &::first-letter {
      text-transform: capitalize;
    }
    margin-bottom: 50px;
  }
  &__image {
    height: 290px;
    width: 100%;
    background-image: url('@/assets/images/success-image.svg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center center;
  }
}
</style>