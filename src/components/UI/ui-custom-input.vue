<template>
  <div class="ui-custom-input input">
    <div class="input__test-btn" @click="toggle">
      <ui-arrow-filled-icon
        :direction="'rotate(180)'"
        :size="25"
        :color="currColor"
        :viewBox="'0 -5 24 24'"
      ></ui-arrow-filled-icon>
    </div>

    <div class="input__container">

      <ui-hint-top
        class="input__hint-top"
        v-if="isFocused"
        :isError="flag"
        :hint="hintTop"
        :color="currColor"
      ></ui-hint-top>

      <input 
        class="input__input" 
        type="normal"
        :placeholder="placeholder"
        
        :style="border"
        @focus="setFocus" 
        @blur="setFocus"
      >

      <ui-hint-bottom
        class="input__hint-bottom"
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
// :placeholder="'upload your photo'"
import { mapGetters } from 'vuex'
export default {
  name: 'ui-custom-input',
  props: {
    isError: { type: Boolean, default: true },
    placeholder: { type: String||Number, default: 'upload' },
  },
  data() {
    return {
      value: 'upload',
      flag: false,
      hintTop: 'top label',
      hintBottom: 'error txt',
      isFocused: false
    }
  },
  // watch: {
  //   isFocused(a, b) { console.log('new value =>', a, 'old value =>', b) }
  // },

  computed: {
    ...mapGetters([ 'COLORS' ]),

    border() { 
      if (this.flag) {
        return {
          'border-width': '2px',
          'border-style': 'solid',
          'border-color': this.COLORS.err,
          'padding': '13px 13px 13px 15px'
        }
      } else {
        return {
          'border-width': '1px',
          'border-style': 'solid',
          'border-color': this.COLORS.norm,
          // transform: 'translateY(1px)'
        }
      }
    },

    currColor() { return this.flag ? this.COLORS.err : this.COLORS.grey7E },

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

.ui-custom-input,
.input {

  position: relative; // temp

  &__test-btn { // temp
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

  // &__container { }
  // &__hint-top { }
  
  // ORIGINAL INP
  &__input {
    width: 380px;
    height: 54px;
    padding: $input-paddings;
    border-radius: $input-brd-radius;
    @include media('min', 'sm') { width: 328px; }
    @include media('min', 'md') { width: 380px; }

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
