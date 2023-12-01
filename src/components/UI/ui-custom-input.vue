<template>
  <div class="ui-custom-input input" :class="{ 'error-base': isError }">

    <div class="input__content">
      {{ content }}
    </div>

  </div>
</template>

<script>
// API
// :isError="false"
// :content="'upload your photo'"
export default {
  name: 'ui-custom-input',
  data() {
    return {}
  },
  props: {
    isError: { type: Boolean, default: true },
    content: { type: String||Number, default: 'upload your photo' },
  },
  methods: {}
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-custom-input, 
.input {
  // width: 100%;
  border: $txt-area-still-border;
  border-radius: 0 $input-brd-radius $input-brd-radius 0;
  border-left: none;
  &__content {
    @include body16;
    padding: $input-paddings;
    text-transform: capitalize;
  }
}

.error-base {
  border: $upload-button-border-error;
  border-left: none;
}
</style>
