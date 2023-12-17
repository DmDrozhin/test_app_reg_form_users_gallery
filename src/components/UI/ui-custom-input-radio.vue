<template>
  <div class="ui-custom-input-radio">
    <div class="container" v-if="jobList">
      <div class="radio" v-for="(it, idx) in jobList" :key="idx">
        <input 
          :id="idx" 
          :name="'inp-form-' + inputData.name"
          :type="inputData.sets.type"
          :tabindex="inputData.sets.tabindex + idx"
          :checked="it.isChecked"
          :disabled="it.disabled"
          :value="it.label"
          @input.prevent="handleCheck($event)"
        >
        <label :for="idx" class="radio-label">{{ it.label }}</label>
      </div>
      <div class="err-msg" v-if="errMsg">{{ errMsg }}</div>
    </div>
    <div class="err-load-msg" v-else>{{ errLoading }}</div>
  </div>
</template>

<script>

export default {
  name: 'ui-custom-input-radio',
  props: { inputData: { type: Object, default: () => {} } },

  data() {
    return {
      errLoading: 'Job positions info hasn\'t been uploaded !'
    }
  },

  computed: {
    errMsg() {
      const err = this.inputData.err
      const list = this.inputData.errList
      return err ? list[this.inputData.err - 1] : false
    },
    jobList() {
      return this.inputData.labels ? this.inputData.labels : false
    }
  },

  methods: {
    handleCheck(ev) {
      const upData = {}
      upData.name = this.inputData.name
      upData.inpValue = ev.target.value
      upData.valueId = +ev.target.id + 1
      upData.err = 0
      this.$store.dispatch('formData/setInpData', upData)
    }
  },
}
</script>

<style lang="scss" scoped>
.ui-custom-input-radio {
  // $color1: #f4f4f4;
  $color1:  #F8F8F8;
  $color2: $secondary;
  // .container {
  // }
  .radio {
    margin-bottom: 7px;
    &:last-child {
      margin-bottom: 0px;
    }

    input[type="radio"] {
      position: absolute;
      opacity: 0;

      +.radio-label {
        @include body16;
        
        display: inline-block;
        &:before {
          content: '';
          background: $color1;
          border-radius: 100%;
          border: 1px solid darken($color1, 25%);
          // border: 1px solid $color1;
          display: inline-block;
          width: 18.13px;
          height: 18.13px;
          position: relative;
          top: 3px;
          margin-right: 12px;
          margin-top: 0px;
          margin-bottom: 0px; // mb
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }

      &:checked {
        +.radio-label {
          &:before {
            background-color: $color2;
            box-shadow: inset 0 0 0 4px $color1;
          }
        }
      }

      &:focus {
        +.radio-label {
          &:before {
            outline: none;
            border-color: $color2;
          }
        }
      }

      &:disabled {
        +.radio-label {
          &:before {
            box-shadow: inset 0 0 0 4px $color1;
            border-color: darken($color1, 25%);
            background: darken($color1, 25%);
          }
        }
      }

      +.radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
  .err-msg {
    position: absolute;
    @include body12;
    color: $error;
    margin: 4px 0 0 16px;
  }
  .err-load-msg {
    @include body16;
    color: $error;
  }
}</style>