<template>
  <div class="ui-custom-input input">
    <div class="input__container">
      <fieldset class="input__fieldset" :class="{'err-brd': errMsg}">
        <legend 
          v-if="isFocused || inputData.inpValue"
          class="input__legend"
          :class="{'err-txt': errMsg}"
        >
            {{ inputData.holder }}
        </legend>
        <input 
          class="input__input"
          :name="'inp-form-' + inputData.name"
          v-model.lazy="inputData.inpValue"
          :type="inputData.sets.type"
          :placeholder="inputData.holder"
          :tabindex="inputData.sets.tabindex"
          :disabled="inputData.sets.disabled"
          :autofocus="inputData.sets.autofocus"
          :required="inputData.sets.required"
          @focus="this.isFocused = true"
          @blur="this.isFocused = false"
          @change="runHandler"
        >
      </fieldset>
      <div class="input__err-msg" v-if="errMsg">{{ errMsg }}</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-custom-input',
  props: { inputData: { type: Object, default: () => {} } },

  data() {
    return {
      isFocused: false
    }
  },
  // watch: { isFocused(a, b) { console.log('new value =>', a, 'old value =>', b) } },

  computed: {
    errMsg() {
      const err = this.inputData.err
      const list = this.inputData.errList
      return err ? list[this.inputData.err - 1] : false
    }
  },

  methods: {
    validate(val) {
      if (val === '') return 1
      else return this.inputData.regex.test(val) ? 0 : 2
    },
    updateState(newVal) {
      const upData = {}
      upData.name = this.inputData.name
      upData.err = this.validate(newVal)
      upData.inpValue = newVal
      this.$store.dispatch('formData/setInpData', upData)
    },
    runHandler (ev) {
      const res = ev.target.value
      this.updateState(res)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.ui-custom-input,
.input {
  // &__container { }
  // &__hint-top { }
  
  // ORIGINAL INP
  &__fieldset {
    height: 54px;
    width: 100%;
    border: 1px solid $input-brd-color;
    border-radius: $brd-radius;
    position: relative;
  }
  &__legend {
    position: absolute;
    top: -6px;
    color: $grey7E;
    margin-left: 12px;
    background-color: $bg-color1;
    text-transform: capitalize;
    outline: none;
    padding: 0 4px;
    font-size: 12px;
    line-height: 12px;
  }
  &__input {
    width: 100%;
    height: inherit;
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: 16px;
    @include body16;
    color: $black87;
    &::placeholder {
      color: $grey7E;
    }
    &:focus {
      color: $black87;
    }
    &:focus::placeholder {
      color: $black87;
    }
  }
  &__err-msg {
    position: absolute;
    @include body12;
    color: $error;
    margin: 4px 0 0 17px;
  }
}
.err-brd {
  border: 1px solid $error;
  outline: 1px solid $error;
}
.err-txt {
  color: $error;
}
.focus-txt {
  color: $black87; 
}
</style>
