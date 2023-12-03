<template>
  <button 
    class="ui-button-main button"
    type="button"
    @click="handleClick()">
    {{ title }}
  </button>
</template>

<script>
// API
// :isDisabled="false"
// :title="'button txt'"
// @buttonClick="handleClick()"
export default {
  name: 'ui-button-main',
  data() {
    return {}
  },
  props: {
    isDisabled: { type: Boolean, default: true },
    title: { type: String||Number, default: 'button title' }
  },
  methods: {
    // handleClick() { this.$emit('buttonClick') }
    handleClick() { console.log('Main button Click') }
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-button-main, 
.button {
  border: none;
  height: 34px;
  width: 100px;
  padding: $btn-pd;
  background-color: $primary;
  border-radius: $btn-rd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  &:hover {
    background-color: $btn-hover;
  }
  &__title {
    @include body16;
    color: $black87;
    text-transform: capitalize;
  }
  &__title:hover {
    color: $black87;
  }
  &:disabled {
    background-color: $btn-disabled;
    color: $white87;
    pointer-events: none;
  }
}
</style>
