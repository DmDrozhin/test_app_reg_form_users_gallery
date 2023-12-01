<template>
  <div class="ui-comp-upload block">

    <ui-button-input
      class="block__button"
      :isError="isError"
      :title="btnTitle"
      :hint="btnHint"
    ></ui-button-input>

    <ui-custom-input
      class="block__textarea"
      :isError="isError"
      :placeholder="placeholder"
    ></ui-custom-input>
  </div>

</template>

<script>
export default {
  name: 'ui-comp-upload',
  data() {
    return{
      isError: true,
      btnTitle: 'button',
      btnHint: 'error txt',
      placeholder: 'upload your photo',
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
.ui-comp-upload, .block {
  display: flex;
  justify-content: center;
  align-items: center;
  &__button {}
  &__textarea {}
}


</style>