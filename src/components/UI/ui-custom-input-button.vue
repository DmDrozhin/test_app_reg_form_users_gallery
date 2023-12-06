<template>
  <div class="ui-custom-input-button input">
    <div class="input__container">
      
      <!-- @click.prevent="handleClick" -->
      <input 
        class="input__input"
        :type="inputData.inpType"
        :name="inputData.inpName"
        :value="inputData.inpPlaceholder"
        :style="border"
        @click.prevent="handleClick($event)"
      >
      <ui-hint-bottom
        class="input__hint-bottom"
        v-if="inputData.isValid === false"
        :isError="inputData.isValid === false"
        :hint="inputData.errMessage"
        :color="currColor"
      ></ui-hint-bottom>

    </div>
  </div>
</template>

<script>
// API
//
//
// @buttonClick="handleClick"
import { mapGetters } from 'vuex'
export default {
  name: 'ui-custom-input-button',
  props: {

    inputData: {
      inpName: { type: String, default: 'post-from-button' },
      inpType: { type: String, default: 'button' },
      inpPlaceholder: { type: String || Number, default: 'upload' },
      isValid: { type: Boolean, default: true },
      errMessage: { type: String, default: 'error txt' },
      isDisabled: { type: Boolean, default: false },
      inpValue: { type: String || Number, default: 'dfgsd' }, 
    }

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
      const err = { 
        border: `1px solid ${this.COLORS.err}`, 
        outline: `1px solid ${this.COLORS.err}` 
      }
      const norm = { border: `1px solid ${this.COLORS.black87}` }
      return this.inputData.isValid ? norm: err
    },
    
    currColor() { return this.inputData.isValid ? this.COLORS.grey7E : this.COLORS.err },

  },
  methods: { 
    handleClick(ev) {
      this.$emit('uploadClk', ev.target.value)
    } 
  },
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
    width: 83px; // fixed width acc to mock req
    height: 54px;
    background: none;
    border-style: solid;

    border-radius: $input-brd-radius 0 0 $input-brd-radius;
    @include body16;
    text-transform: capitalize;
    padding: $input-paddings;

    &:focus {
      border-radius: $input-brd-radius 0 0 $input-brd-radius;
      border-color: v-bind(currColor);
      outline: none;
    }
  }
  // &__hint-bottom {

  // }
}

</style>
