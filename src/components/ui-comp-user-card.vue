<template>
  <div class="ui-comp-user-card card">
    <div class="card__container">
      <div class="card__wrapper user">
        <div class="user__photo" type="image">
          <img :src="require('@/assets/images/photo-cover.svg')" alt="user photo">
        </div>
        <p class="user__name">{{ userCard.name }}</p>
        <div class="user__mid-wrapper">

          <p class="user__job">{{ userCard.job }}</p>
          <p 
            class="user__email rel"
            id="email"
            @mouseover="handleHover" 
            @mouseleave="handleHover"
          >
            {{ userCard.email }}
            <span 
              v-if="toolTip.isHover && toolTip.el === 'email'"
              :class="{ 'tooltip': toolTip }"
              :style="tipPosition"
            >
              {{ userCard.email }}
            </span>
          </p>
          <p class="user__phone">{{ userCard.phone }}</p>

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
    idx: { type: Number, default: 0 }
  },
  data() {
    return{
      cont: 'some content',
      toolTip: { isHover: false, el: '', x: 0 }
      
    }
  },
  computed: { 
    tipPosition () { return {
        left: `${this.toolTip.x - 20}px`,
        // transform: `translateX(${this.toolTip.x}px)`,
      }
    }
  },
  methods: {
    handleHover(e) {
      // console.log(e)
      if (e.target.id === '') return
      else {
        if (e.type === 'mouseover') {
          this.toolTip.isHover = true
          this.toolTip.el = e.target.id
          this.toolTip.x = e.offsetX
        }
        if (e.type === 'mouseleave') {
          this.toolTip = {}
        }
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
    // width: 304px;
  }
  &__wrapper,
  .user {
    padding: 20px;
    // border: 1px solid hotpink;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    &__photo {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    &__name {
      position: relative;
      text-align: center;
      @include body16;
      // @include txt-ellipsis;
    }
    &__mid-wrapper {
      text-align: center;
    }
    &__job {
      @include body16;
      // @include txt-ellipsis;
    }

    &__email {
      @include body16;
      // @include txt-ellipsis;
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
.tooltip {
  position: absolute;
  bottom: -45px;
  border-radius: $input-brd-radius;
  @include body16;
  padding: 3px 16px;
  background-color: $black87;
  color: $bg-color2;
  z-index: 1;
  white-space: nowrap;
}

</style>
