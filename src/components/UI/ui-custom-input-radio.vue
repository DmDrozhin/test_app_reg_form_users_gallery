<template>
  <div class="ui-custom-input-radio">
    <div class="container">
      <div class="radio" v-for="(it, idx) in inputData.labels" :key="idx">
        <input 
          :id="idx" 
          name="post-form-radio" 
          type="radio" 
          :checked="it.isChecked"
          :disabled="it.disabled"
          :value="it.label"
          @input.prevent="handleCheck($event)"
        >
        <label :for="idx" class="radio-label">{{ it.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ui-custom-input-radio',
  props: { inputData: { 
        inpName:  { type: String, default: 'post-from-radio' },
        inpType: { type: String, default: 'radio' }, 
        labels: { type: Array, default: () => { 
            return [ { label: 'Frontend developer', isChecked: false, disabled: false },
              { label: 'Backend developer', isChecked: 'checked', disabled: false },
              { label: 'Designer', isChecked: false, disabled: false },
              { label: 'QA', isChecked: false, disabled: false } ]
          }
        }, 
        isValid: { type: Boolean, default: true },
        errMessage: { type: String, default: 'error msg' },
        value: { type: String || Number, default: ''}
      }
  },
  data() {
    return {
      some: ''
    }
  },
  methods: {
    handleCheck(ev) {
      // console.log(ev.target.value)
      this.$emit('pickedRadio', ev.target.value)
    }
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.ui-custom-input-radio {
  // $color1: #f4f4f4;
  $color1:  #F8F8F8;
  $color2: $secondary;


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
}</style>