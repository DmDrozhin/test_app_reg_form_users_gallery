<template>
  <div class="ui-comp-user-card card">
    <div class="card__container">
      <div class="card__wrapper user">
        <!-- <div class="user__reg-date">{{ date }}</div> -->
        <div class="user__photo">
          <img v-src-exceptions="photo" @error="handleErr"  alt="user photo">
          <!-- <img :src="photo" @error="handleErr" alt="user photo"> -->
        </div>
        
        <p class="user__name">{{ userCard.name }}</p>
        <div class="user__mid-wrapper">
          <p class="user__job">{{ userCard.position }}</p>

          <p class="user__email rel" id="email"
            @mouseover="handleHover" 
            @mouseleave="handleHover"
          >{{ userCard.email }}</p>

          <div class="user__email-tooltip block">
            <p class="block__tooltip"
              v-if="toolTip.isHover && toolTip.el === 'email'"
              :style="tipPosition"
            >{{ userCard.email }}</p>
          </div>
            
          <p class="user__phone" v-phone-format>{{ userCard.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// API
// :userCard="user array"

export default {
  name: 'ui-comp-user-card',
  props: { 
    userCard: { type: Object, default: () => {} },
  },
  data() {
    return{
      cont: 'some content',
      toolTip: { isHover: false, el: '', x: 0 },
      altImg: require('@/assets//images/photo-cover.svg'),
      isImgOk: true,
      except: 'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png'
    }
  },
  computed: { 
    // tipPosition () { return { left: `${this.toolTip.x - 20}px` } },
    tipPosition () { return { transform: `translateX(${this.toolTip.x - 20}px)` } },
    
    photo() { return this.isImgOk ? this.userCard.photo : this.altImg },

    date() {return new Date(this.userCard.registration_timestamp).toDateString() }
  },

  methods: {
    handleErr(ev) { 
      this.isImgOk = false
    },
    handleHover(ev) {
      if (ev.target.id === '') return
      else {
        if (ev.type === 'mouseover') {
          this.toolTip.isHover = true
          this.toolTip.el = ev.target.id
          this.toolTip.x = ev.offsetX
        }
        if (ev.type === 'mouseleave') this.toolTip = {}
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-comp-user-card,
.card {
  height: 254px;
  border-radius: 10px;
  background-color: $bg-color2;
  &__container {
    margin: 0 auto;
    @include user-card;   
  }
  &__wrapper,
  .user {
    position: relative;
    max-width: inherit;
    padding: 20px;
    // border: 1px solid hotpink;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    &__reg-date {
      position: absolute;
      @include body12;
      left: 10px;
      top: -15px;
    }
    &__photo {
      width: 70px;
      height: 70px;
      
      & > img {
        border-radius: 50%;
        width: 70px;
        height: 70px;
      }
    }
    &__name {
      max-width: inherit;
      position: relative;
      text-align: center;
      @include body16;
      @include txt-ellipsis;
    }
    &__mid-wrapper {
      max-width: inherit;
      text-align: center;
    }
    &__job {
      max-width: inherit;
      @include body16;
      @include txt-ellipsis;
    }

    &__email {
      max-width: inherit;
      @include body16;
      @include txt-ellipsis;
    }
    &__email-tooltip-block, 
    .block {
      position: relative;
      width: inherit;
      height: 0;
      &__tooltip {
        width: inherit;
        position: absolute;
        top: 19px;
        border-radius: $brd-radius;
        background-color: $black87;
        @include body16;
        color: $bg-color2;
        @include txt-ellipsis;
        padding: 3px 16px;
        z-index: 5;
        // display: none;
      }
    }
    &__phone {
      @include body16;
      // @include txt-ellipsis;
    }
  }
}
.rel {
  position: relative;
  cursor: pointer;
}


</style>
