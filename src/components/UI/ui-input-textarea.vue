<template>
  <div class="ui-input-textarea input" :class="{ 'error-base': isError }">
    <textarea 
      class="input__textarea"
    >
      {{ text }}
    </textarea>
  </div>
</template>

<script>
// API
// :isError="false"
// :text="'upload your photo'"
export default {
  name: 'ui-input-textarea',
  data() {
    return {}
  },
  props: {
    isError: { type: Boolean, default: true },
    text: { type: String||Number, default: 'upload your photo' },
  },
  methods: {}
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-input-textarea, 
.input {
  max-width: 100%;
  border: $txt-area-still-border;
  border-radius: 0 $input-brd-radius $input-brd-radius 0;
  border-left-width: 0;
  border-right-width: 0;
  height: 26px;

  &__textarea {
    min-height: 100%;
    background-color: #dba2a2;
    @include body16;
    // padding: $input-paddings;
    text-transform: capitalize;
    box-sizing: content-box;
  }
}

.error-base {
  border: $upload-button-border-error;
}
</style>
