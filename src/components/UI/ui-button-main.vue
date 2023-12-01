<template>
  <div 
    class="ui-button-main button"
    :class="{ 'disabled-base': isDisabled }"
    @click="handleClick()"
  >
    <p 
      class="button__title"
      :class="{ 'disabled-txt': isDisabled }"
    >
      {{ title }}
    </p>
  </div>
</template>

<script>
// API
// :isDisabled="false"
// :title="'button txt'"
export default {
  name: 'ui-button-main',
  data() {
    return {}
  },
  props: {
    isDisabled: { type: Boolean, default: false },
    title: { type: String||Number, default: 'button title' }
  },
  methods: {
    handleClick() { this.$emit('buttonClick') }
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-button-main, 
.button {
  width: fit-content;
  padding: $main-button-padding;
  background-color: $main-button-still-bg-color;
  border-radius: $main-button-radius;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: $main-button-hover-bg-color;
  }
  &__title {
    @include body16;
    text-transform: capitalize;
  }
  &__title:hover {
    color: $main-button-hover-text-color;
  }
}
.disabled-base {
  background-color: $main-button-disabled-bg-color;
  pointer-events: none;
}
.disabled-txt {
  @include body12;
  color: $input-error-color;
}
</style>
