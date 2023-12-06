<template>
  <div class="ui-custom-input input">
    <!-- TEST reasons-->
    <div class="input__test-btn" @click="toggle">
      <ui-arrow-filled-icon
        :direction="'rotate(180)'"
        :size="25"
        :color="currColor"
        :viewBox="'0 -5 24 24'"
      ></ui-arrow-filled-icon>
    </div>
    <!-- / TEST reasons-->

    <div class="input__container">

      <ui-hint-top
        class="input__hint-top"
        v-if="isFocused"
        :isError="flag"
        :hint="placeholderTxt"
        :color="currColor"
      ></ui-hint-top>

      <input 
        class="input__input" 
        :type="inputData.inpType"
        :name="inputData.inpName"
        v-model.lazy="inputData.inpValue"
        :placeholder="placeholderTxt"
        :style="border"
        @input="runHandler"
        @focus.stop="setFocus"
        @blur.stop="setFocus"
      >

      <ui-hint-bottom
        class="input__hint-bottom"
        v-if="flag"
        :isError="flag"
        :hint="inputData.errMessage"
        :color="currColor"
      ></ui-hint-bottom>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ui-custom-input',

  props: {
    // name: { class: 'ui-form-name', name: 'post-from-name', type: 'text', placeholder: 'name', isValid: true, value: 'value' },
    inputData: {
      inpName: { type: String, default: 'some-inp-name' }, 
      inpType: { type: String, default: 'text' }, 
      inpPlaceholder: { type: String || Number, default: 'placeholder' }, 
      isValid: { type: Boolean, default: true }, 
      errMessage: { type: String, default: 'some error txt' }, 
      isDisabled: { type: Boolean, default: false }, 
      inpValue: { type: String || Number, default: 'inp value' }
    }
  },

  data() {
    return {
      value: 'upload',
      flag: false,
      isFocused: false
    }
  },

  // it's for tech reasons
  // watch: { isFocused(a, b) { console.log('new value =>', a, 'old value =>', b) } },

  computed: {
    ...mapGetters([ 'COLORS' ]),

    // capitalize the placeholder 1st letter
    placeholderTxt () {
      const ph = this.inputData.inpPlaceholder
      return ph.charAt(0).toUpperCase() + ph.slice(1)
    },

    border() {
      const err = { 
        border: `1px solid ${this.COLORS.err}`, 
        outline: `1px solid ${this.COLORS.err}` 
      }
      const norm = { border: `1px solid ${this.COLORS.norm}` }
      return this.flag ? err : norm
      
    },

    currColor() { return this.flag ? this.COLORS.err : this.COLORS.grey7E },

  },
  methods: {
    toggle () { this.flag = !this.flag }, // test reasons

    setFocus(ev) {
      if (ev.type === 'focus') this.isFocused = true
      else if (ev.type === 'blur') { this.isFocused = false }
    },

    runHandler (ev) {
      const res = ev.target.value
      if (res) this.$emit('update:modelValue', res)
      else this.$emit('update:modelValue', '')
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.ui-custom-input,
.input {
  // *temp
  position: relative;
  &__test-btn {
    position: absolute;
    top: -20px;
    right: 0px;
    &:before {
      content: 'test';
      position: absolute;
      left: -25px;
      top: -5px;
    }
  }
  // */temp

  // &__container { }
  // &__hint-top { }
  
  // ORIGINAL INP
  &__input {
    width: 100%;
    height: 54px;
    padding: $input-paddings;
    border-radius: $input-brd-radius;
    background-color: transparent;

    @include body16;
    // color: $grey;
    color: $black87;
    text-transform: capitalize;
    &::placeholder {
      color: $grey7E;
    }
    &:focus {
      outline: none;
      color: $black87;
    }
    &:focus::placeholder {
      color: $black87;
    }
  }
  // &__hint-bottom { }
}

</style>
