<template>
  <button 
    class="ui-button-main button"
    type="button"
    :name="title"
    :class="{'dis-btn': isDisabled }"
    @click="handleClick()"
  >
    <!-- <slot></slot> -->
    <p class="button__title" :class="{ 'dis-txt': isDisabled }">{{ title }}</p>
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
    title: { type: String||Number, default: 'main btn' }
  },
  methods: {
    // handleClick() { this.$emit('buttonClick') }
    handleClick() { this.$emit('buttonClick', this.title) }
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
    white-space: nowrap;
    @include capitalize;    
  }
  &__title:hover {
    color: $black87;
  }
}
.dis-btn {
  background-color: $btn-disabled;
  pointer-events: none;
  cursor: none;
}
.dis-txt {
  color: $white87;
}
</style>
