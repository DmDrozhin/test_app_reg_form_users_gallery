<template>
  <div class="ui-hint-top hint">
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
// :color="'#7E7E7E'"
export default {
  name: 'ui-hint-top',
  data() {
    return {}
  },
  props: {
    // isDisabled: { type: Boolean, default: false },
    isError: { type: Boolean, default: false },
    hint: { type: String||Number, default: 'error text' },
    color: { type: String, default: '#7E7E7E' }
  },
}

</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-hint-top, 
.hint {
  max-width: inherit;
  &__wrapper {
    z-index: 10;
    position: absolute;
    width: 100%;
    // border: 1px dotted rgb(0, 42, 255);
    top: -10px;
    left: 0;
    text-align: left;
    padding-left: 14px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__txt {
    @include body12;
    color: v-bind(color);
    background-color: $bg-color1;
    padding: 0 3px;
  }
  .if-error {
    color: $error;

  }
}
</style>
