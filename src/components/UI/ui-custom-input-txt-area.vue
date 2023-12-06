<template>
  <div class="ui-custom-input-txt-area input">
    <div class="input__container">
      
      <!-- No needed in this app -->
      <!-- <ui-hint-top
        class="input__hint-top"
        v-if="isFocused"
        :isError="inputData.isValid === false"
        :hint="hintTop"
        :color="currColor"
      ></ui-hint-top> -->
      <!-- / No needed in this app -->

      <textarea
        class="input__input" 
        rows="1"
        v-model="inputData.inpValue"
        :placeholder="placeholderTxt"
        :style="border"
        @change.prevent="runHandler($event)"
        @focus.stop="setFocus"
        @blur.stop="setFocus"
      ></textarea>

      <!-- No needed in this app -->
      <!-- <ui-hint-bottom
        class="input__hint-bottom"
        v-if="inputData.isValid === false"
        :isError="inputData.isValid === false"
        :hint="hintBottom"
        :color="currColor"
      ></ui-hint-bottom> -->
      <!-- / No needed in this app -->

    </div>
  </div>
</template>

<script>
// API
// :isError="false"
// :placeholder="'upload your photo'"
import { mapGetters } from 'vuex'
export default {
  name: 'ui-custom-input-txt-area',
  props: {
    inputData: {
      inpName: { type: String, default: 'post-from-upload-url' },
      // inpType: { type: String, default: 'textarea' },
      inpPlaceholder: { type: String || Number, default: 'upload your photo' },
      isValid: { type: Boolean, default: true },
      errMessage: { type: String, default: 'error txt' },
      isDisabled: { type: Boolean, default: false },
      inpValue: { type: String || Number, default: 'bcvfbxcv' }, 
    }
  },
  data() {
    return {
      isFocused: false
      // hintTop: 'top label', // no needed in this app
      // hintBottom: 'err txt', // no needed in this app
    }
  },
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
        outline: `1px solid ${this.COLORS.err}`,
        'border-left-width': 0,
        'outline-left-width': 0
      }
      const norm = {
        border: `1px solid ${this.COLORS.norm}`,
        'border-left-width': 0,
      }
      return this.inputData.isValid ? norm : err
    },

    currColor() { return this.inputData.isValid ? this.COLORS.grey7E : this.COLORS.err },

  },
  methods: {
    runHandler (ev) {
      const res = ev.target.value
      if (res) this.$emit('update:modelValue', res)
      else this.$emit('update:modelValue', '')
    },

    setFocus(ev) {
      if (ev.type === 'focus') this.isFocused = true
      else if (ev.type === 'blur') this.isFocused = false
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.ui-custom-input-txt-area,
.input {
  width: 100%;
  &__container {
    width: inherit;
    position: relative;
  }
  // ORIGINAL INP
  &__input {
    box-sizing: border-box;
    width: inherit;
    height: 54px;
    display: block;
    resize: none;
    background-color: transparent;
    overflow: hidden;
    border-radius: 0 $input-brd-radius $input-brd-radius 0;
    // border-left: none;
    @include body16; // text style
    color: $grey7E;
    padding: $input-paddings;
    &::placeholder {
      color: $grey7E;
    }
    &:focus {
      color: $black87;
      outline: none;
    }
    &:focus::placeholder {
      color: $black87;
    }
  }
  // &__hint-bottom {
  // }
}

</style>
