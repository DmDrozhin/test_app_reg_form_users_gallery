<template>
  <div 
    class="ui-button-input button"
    :class="{ 'error-base': isError }"
    @click="handleClick()"
  >
    <p 
      class="button__title"
    >
      {{ title }}
    </p>
    <ui-bottom-hint
      v-if="isError"
      class="button__ui-error-hint"
      :isError="isError"
      :hint="hint"
    ></ui-bottom-hint>
  </div>
</template>

<script>
// API
// :isError="false"
// :title="'button txt'"
// :hint="'error txt'"
export default {
  name: 'ui-button-input',
  data() {
    return {}
  },
  props: {
    isError: { type: Boolean, default: true },
    title: { type: String||Number, default: 'button title' },
    hint: { type: String||Number, default: 'parent hint text' }
  },
  methods: {
    handleClick() { this.$emit('buttonClick') }
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-button-input, 
.button {
  max-width: fit-content;
  position: relative;
  padding: $input-paddings;
  border: $upload-button-border-enabled;
  border-radius: $input-brd-radius 0 0 $input-brd-radius;
  display: grid;
  place-content: center;
  &__title {
    @include body16;
    text-transform: capitalize;
  }
}
.error-base {
  border: $upload-button-border-error;
  pointer-events: none;
}
</style>
