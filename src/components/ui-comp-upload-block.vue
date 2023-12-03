<template>
  <div class="ui-comp-upload-block block">
    <!-- temp -->
    <div class="block__test-btn"><button @click="toggleError">Toggle</button></div>
    <!-- temp -->

    <div class="block__wrapper">

      <ui-custom-input-button
        class="block__button"
        :isError="isError"
        :title="btnTitle"
        :hint="btnHint"
        @buttonClick="handleClick()"
      ></ui-custom-input-button>

      <ui-custom-input-txt-area
        class="block__textarea"
        :isError="isError"
        :placeholder="placeholder"
      ></ui-custom-input-txt-area>

    </div>
  </div>

</template>

<script>
export default {
  name: 'ui-comp-upload-block',
  data() {
    return{
      isError: true,
      btnTitle: 'Upload',
      btnHint: 'error txt',
      placeholder: 'upload your photo',
    }
  },
  methods: {
    toggleError() { this.isError = !this.isError },

    handleClick() { console.log('Clicked-UpLoad-block!!!') },
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-comp-upload-block, 
.block {
  position: relative;
  &__test-btn {
    position: absolute;
    top: 0px;
    left: -100px;
  }
  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // &__button {}
    &__textarea {
      flex: 1;
    }
  }


}

</style>