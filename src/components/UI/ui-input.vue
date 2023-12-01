<template>
  <div class="ui-input-textarea inp" :class="{ 'error-base': isError }">

    <div class="inp__top-label-wrapper">
      <span class="inp__top-label-txt">{{ topLabel }}</span>
    </div>

    <textarea
      class="inp__textarea"
      :placeholder="placeholder"
    ></textarea>

  </div>
</template>

<script>
// API
// :isError="false"
// :placeholder="'upload your photo'"
// :topLabel="'error txt'" - not with this textarea, potentially could be needed
export default {
  name: 'ui-input-textarea',
  data() {
    return {}
  },
  props: {
    isError: { type: Boolean, default: true },
    topLabel: { type: String||Number, default: 'label' },
    placeholder: { type: String||Number, default: 'upload your photo' },
    // hint: { type: String||Number, default: 'parent hint text' }
  },
  methods: {
    handleClick() { this.$emit('buttonClick') }
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-input-textarea, 
.inp {
  max-width: 100%;
  position: relative;
  padding: $input-paddings;
  border: $upload-button-border-enabled;
  border-radius: $input-brd-radius 0 0 $input-brd-radius;

  @include body16;
  text-transform: capitalize;
  &__top-label-wrapper {
    position: absolute;
  }
  &__top-label-txt {
    @include body12;
    text-transform: capitalize;

  }
  &__textarea {

  }
}

.error-base {
  border: $upload-button-border-error;
}
</style>
