<template>
  <div class="ui-custom-input-file ui-input">
    <div class="ui-input__container">
      <input
        class="ui-input__input-file"
        id="ui-input__input-file"
        type="file"
        :autofocus="inputData.sets.autofocus"
        :required="inputData.sets.required"
        :disabled="inputData.sets.isDisabled"
        :name="'inp-form-' + inputData.name"
        :accept="inputData.accept"
        @change="handleFile"
      >
      <label for="ui-input__input-file" class="ui-input__ui-label ui-label">
          <div 
            class="ui-label__button"
            :class="{'err-brd': errMsg}"
          >
            {{ inputData.holder }}
          </div>
          <div class="ui-label__message" :class="{'err-brd': errMsg }">
            <span :class="{'focus-txt': gotFile }">{{ inputData.fileName }}</span>
          </div>
      </label>
      <div class="ui-input__err-msg" v-if="errMsg">{{ errMsg }}</div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'ui-custom-input-file',
  props: { inputData: { type:Object, default: () => {} } },
  data() {
    return {
      gotFile: '',
    }
  },

  computed: {
    // holder() { return this.gotFile ? this.gotFile.name : this.inputData.holder },
    errMsg() {
      const err = this.inputData.err
      const list = this.inputData.errList
      return err ? list[this.inputData.err - 1] : false
    },
  },

  methods: {
    async validate(file) {
      const lms = this.inputData.limits
      const fl = await this.readFile(file)
      let res1 = file.type === lms.type && file.size < lms.max
      let res2 = fl.w > lms.minW && fl.h > lms.minH
      return res1 && res2 ? 0 : 2
    },

    readFile(file) {
      return new Promise((res, rej) => {
        const rd = new FileReader()
        rd.onload = (ev) => {
          const img = new Image()
          img.src = ev.target.result
          img.onload = () => {
            res({ w: img.width, h: img.height })
          }
          img.onerror = (err) => rej(console.error(err))
        }
        rd.onerror = (err) => rej(consoler.error(err))
        rd.readAsDataURL(file)
      })
    },

    async updateState() {
      try {
        const upData = {}
        upData.name = this.inputData.name
        upData.inpValue = this.gotFile
        upData.fileName = this.gotFile.name
        upData.err = await this.validate(this.gotFile)
        this.$store.dispatch('formData/setInpData', upData)
      } catch(err) {
        console.error('Err update state. *Input file')
      }
    },

    handleFile(ev) {
      // console.log(ev.target.files[0])
      if (ev) {
        this.gotFile = ev.target.files[0]
        this.updateState()
      }
    }
    // The ev.target.files[0] has props:
    // name: 'some_name'
    // size: 80111
    // type: "image/jpeg"
  },
}
</script>

<style lang="scss" scoped>
.ui-custom-input-file,
.ui-input {
  &__container {
    position: relative;
  }
  &__ui-label,
  .ui-label {
    height: 54px;
    line-height: 54px;
    display: flex;
    align-items: center;
    align-content: center;
    &__button {
      flex: 0 0 83px;
      height: inherit;
      line-height: inherit;
      padding-left: 16px;
      border: 1px solid $black87;
      border-radius: $brd-radius 0 0 $brd-radius;
    }
    &__message {
      flex: 1;
      height: inherit;
      line-height: inherit;
      padding-left: 16px;
      border: 1px solid $input-brd-color;
      border-left-width: 0px;
      border-radius: 0 $brd-radius $brd-radius 0;
      color: $grey7E;
      @include txt-ellipsis;
    }
  }
  &__input-file {
    display: none;
  }
  &__err-msg {
    position: absolute;
    @include body12;
    color: $error;
    margin: 4px 0 0 17px;
  }
}
.err-brd {
  border: 1px solid $error!important;
  outline: 1px solid $error;
}
.err-txt {
  color: $error;
}
.focus-txt {
  color: $black87;
}

</style>
