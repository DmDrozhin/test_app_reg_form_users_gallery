<template>
  <div class="ui-custom-input-txt-area input">
    <div class="input__container">

      <!-- <ui-hint-top
        class="input__hint-top"
        v-if="false"
        :isError="isError"
        :hint="hintTop"
        :color="currColor"
      ></ui-hint-top> -->

      <textarea
        class="input__input" 
        rows="1"
        :value="placeholder" 
        :style="border"
        @focus="setFocus" 
        @blur="setFocus"
      ></textarea>

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
import { mapGetters } from 'vuex'
export default {
  name: 'ui-custom-input-txt-area',
  props: {
    isError: { type: Boolean, default: true },
    placeholder: { type: String, default: 'upload' },
  },
  data() {
    return {
      value: 'upload',
      // hintTop: 'top label', // not needed in this mockup
      hintBottom: 'err txt',
      isFocused: false
    }
  },
  // watch: {
  //   isFocused(a, b) { console.log('new value =>', a, 'old value =>', b) }
  // },
  computed: {
    ...mapGetters([ 'COLORS' ]),

    border() { 
      if (this.isError) {
        return {
          'border-width': '2px 2px 2px 0',
          'border-style': 'solid',
          'border-color': this.COLORS.err,
          'padding': '13px 13px 13px 16px'
        }
      } else {
        return {
          'border-width': '1px 1px 1px 0',
          'border-color': this.COLORS.normInp,
          // transform: 'translateY(1px)'
        }
      }
    },

    currColor() { return this.isError ? this.COLORS.err : this.COLORS.norm },

  },
  methods: {
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
  &__container {
    position: relative;
  }
  // ORIGINAL INP
  &__input {
    width: 245px;
    height: 54px;
    display:block;
    resize: none;
    overflow: hidden;
    border-radius: 0 $input-brd-radius $input-brd-radius 0;
    // border-left: none;
    @include body16; // text style
    color: #7E7E7E; // text still color
    padding: $input-paddings;
    text-transform: capitalize;
    &:focus {
      color: $black87;
      outline: none;
    }
  }
  // &__hint-bottom {

  // }
}

</style>
