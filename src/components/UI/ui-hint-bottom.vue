<template>
  <div class="ui-hint-bottom hint">
    <div class="hint__wrapper">
      <span class="hint__txt" :class="{ 'err-txt': isError }">
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
  name: 'ui-hint-bottom',
  data() {
    return {}
  },
  props: {
    isError: { type: Boolean, default: false },
    hint: { type: String||Number, default: 'error text' },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-hint-bottom, 
.hint {
  max-width: inherit;
  &__wrapper {
    position: absolute;
    width: 100%;
    // border: 1px dotted rgb(0, 42, 255);
    bottom: -20px;
    left: 0;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__txt {
    @include body12;
    padding-left: 18px;
  }
  .err-txt {
    color: $error;
  }
}

</style>
