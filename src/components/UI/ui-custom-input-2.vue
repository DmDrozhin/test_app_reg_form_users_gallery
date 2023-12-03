<template>
  <div class="ui-custom-input-2 input">
    <div class="input__test-btn"><button @click="toggle">Toggle</button></div>

    <div class="input__container">

      <ui-hint-top
        v-if="isFocused"
        class="input__hint"
        :isError="flag"
        :hint="hintTop"
        :color="currColor"
      ></ui-hint-top>

      <input 
        type="text" 
        :value="value" 
        class="input__input" 
        :style="border"
        @focus="setFocus" 
        @blur="setFocus"
      >

      <ui-hint-bottom
        class="input__hint"
        v-if="flag"
        :isError="flag"
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
import { mapGetters } from 'vuex'
export default {
  name: 'ui-custom-input-2',
  data() {
    return {
      value: 'upload',
      flag: true,
      hintTop: 'top label',
      hintBottom: 'err txt',
      isFocused: false
    }
  },
  watch: {
    isFocused(a, b) { console.log('new value =>', a, 'old value =>', b) }
  },
  props: {
    isError: { type: Boolean, default: true },
    content: { type: String || Number, default: 'upload' },
  },
  computed: {
    ...mapGetters([ 'COLORS' ]),

    border() { 
      if (this.flag) {
        return {
          'border-width': '2px',
          'border-style': 'solid',
          // 'border-style': 'inset',
          'border-color': this.COLORS.err,
          'padding': '13px 13px 13px 15px'
        }
      } else {
        return {
          'border-width': '1px',
          'border-style': 'solid',
          'border-color': this.COLORS.normInp,
          // transform: 'translateY(1px)'
        }
      }
    },

    currColor() { return this.flag ? this.COLORS.err : this.COLORS.norm },

  },
  methods: {
    toggle () { this.flag = !this.flag },

    setFocus(ev) {
      if (ev.type === 'focus') this.isFocused = true
      else if (ev.type === 'blur') this.isFocused = false
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.ui-custom-input-2,
.input {

  position: relative; // temp

  &__test-btn { // temp
    position: absolute;
    top: 0px;
    left: -100px;
    background-color: #ae8cda;
  }

  &__container {
    // position: relative;
  }
  // ORIGINAL INP
  &__input {
    width: 328px;
    height: 54px;
    border-radius: $input-brd-radius;
    @include body16;
    color: #7E7E7E;
    padding: $input-paddings;
    text-transform: capitalize;
    &:focus {
      color: $black87;
      border-radius: $input-brd-radius;
      border-width: 1px;
      outline: none;
    }
  }
  // &__hint {

  // }
}

</style>
