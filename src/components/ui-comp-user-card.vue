<template>
  <div class="ui-comp-user-card card">
    <div class="card__container">
      <div class="card__wrapper user">
        <div class="user__photo" type="image">
          <img :src="require('@/assets/images/photo-cover.svg')" alt="user photo">
        </div>
        <!-- <p class="user__name rel">{{ userCard.name }}</p>
        <div class="user__mid-wrapper">
          <p class="user__job rel" @mouseover="handleHover" ref="job" data-tip='job'>{{ userCard.job }}</p>
          <p class="user__email rel">{{ userCard.email }}</p>
          <p class="user__phone rel">{{ userCard.phone }}</p> -->
          
          

        <p 
          class="user__name rel" 
          id="name"
          @mouseover="handleHover" 
          @mouseleave="handleHover"
        >
          {{ userCard.name }}
          <span 
            v-if="toolTip.isHover && toolTip.el === 'name'"
            :class="{ 'tooltip': toolTip }"
            :style="tipPosition"
          >
            {{ userCard.name }}
          </span>
        </p>





        <div class="user__mid-wrapper">
          <p class="user__job rel" id="job">
            {{ userCard.job }}
            <!-- <span class="user__job-tooltip tooltip">{{ userCard.job }}</span> -->
          </p>
          <p class="user__email rel" id="email">
            {{ userCard.email }}
          <!-- <span class="user__email-tooltip tooltip">{{ userCard.email }}</span> -->
          </p>
          <p class="user__phone rel" id="phone">
            {{ userCard.phone }}
            <!-- <span class="user__phone-tooltip tooltip">{{ userCard.phone }}</span> -->
          </p>
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
      toolTip: { isHover: false, el: '', x: 0, y: 0 }
      
    }
  },
  computed: { 
    tipPosition () { return {
        left: `${this.toolTip.x - 20}px`,
        bottom: `${this.toolTip.y -90}px`
        // transform: `translateX(${this.toolTip.x}px)`,
        // transform: `translateY(${this.toolTip.y}px)`
      }
    }
  },
  methods: {
    handleHover(e) {
      // console.log(e)
      if (e.target.id === '') return
      else {
        if (e.type === 'mouseover') {
          // console.log('over ', e.target.id)
          this.toolTip.isHover = true
          this.toolTip.el = e.target.id
          this.toolTip.x = e.offsetX
          this.toolTip.y = e.offsetY
        }
        if (e.type === 'mouseleave') {
          // console.log('leave ', e.target.id)
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
  border-radius: 20px;
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
  display: block;
}
.tooltip {
  position: absolute;
  bottom: -45px;
  left: 40%;
  border-radius: $input-brd-radius;
  @include body16;
  padding: 3px 16px;
  background-color: $black87;
  color: $bg-color2;
  z-index: 1;
}

</style>
