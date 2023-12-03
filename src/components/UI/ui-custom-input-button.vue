<template>
  <div class="ui-custom-input-button input">
    <div class="input__container">

      <input 
        class="input__input" 
        type="button" 
        :value="value"
        :style="border"
        @click.prevent="handleClick"
      >

      <ui-hint-bottom
        class="input__hint-bottom"
        v-if="isError"
        :isError="isError"
        :hint="hintBottom"
        :color="currColor"
      ></ui-hint-bottom>

    </div>
  </div>
</template>

<script>
// API
// :isError="false"
// :content="'upload your photo'"
// @buttonClick="handleClick"
import { mapGetters } from 'vuex'
export default {
  name: 'ui-custom-input-button',
  props: {
    isError: { type: Boolean, default: true },
    content: { type: String||Number, default: 'upload' },
  },
  data() {
    return {
      value: 'upload',
      hintBottom: 'err txt',
    }
  },

  computed: {
    ...mapGetters([ 'COLORS' ]),

    border() { 
      if (this.isError) {
        return {
          'border-width': '2px',
          'border-style': 'solid',
          'border-color': this.COLORS.err,
          'padding-top': '13px',
          'padding-left': '15px',
        }
      } else {
        return {
          'border-width': '1px',
          'border-color': this.COLORS.norm,
          // transform: 'translateY(1px)'
        }
      }
    },
    
    currColor() { return this.isError ? this.COLORS.err : this.COLORS.grey7E },

  },
  methods: { handleClick() { this.$emit('buttonClick') } },
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.ui-custom-input-button,
.input {

  &__container {
    position: relative;
  }
  
  // ORIGINAL INP
  &__input {
    box-sizing: border-box;
    width: 83px;
    height: 54px;
    background: none;
    border-style: solid;

    border-radius: $input-brd-radius 0 0 $input-brd-radius;
    @include body16;
    padding: $input-paddings;
    text-transform: capitalize;
    &:focus {
      border-color: v-bind(currColor);
    }
    &:active {
      border-color: v-bind(currColor);
    }
  }
  // &__hint-bottom {

  // }
}

</style>
