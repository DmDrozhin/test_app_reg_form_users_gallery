<template>
  <div class="ui-bottom-hint hint">
    <div class="hint__wrapper">
      <span class="hint__txt" :class="{ 'if-error': isError }">
        {{ hint }}
      </span>
    </div>
  </div>
</template>

<script>
// API
// :isError="false"
// :hint="'error txt'"
export default {
  name: 'ui-bottom-hint',
  data() {
    return {}
  },
  props: {
    // isDisabled: { type: Boolean, default: false },
    isError: { type: Boolean, default: false },
    hint: { type: String||Number, default: 'error text' }
  },
}

</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-bottom-hint, 
.hint {
  max-width: inherit;
  &__wrapper {
    position: absolute;
    width: 100%;
    border: 1px dotted rgb(0, 42, 255);
    bottom: -20px;
    left: 0;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__txt {
    @include body12;
  }
  .if-error {
    color: $input-error-color;
  }
}
</style>
