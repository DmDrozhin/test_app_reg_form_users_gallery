<template>
  <main class="ui-comp-main main">
    <div class="main__container">
      <div class="main__wrapper">
        <h1 class="main__title">{{ title }}</h1>
        <div class="main__card-gallery">
          <ui-comp-user-card
            class="main__ui-card"
            v-for="(userCard, idx) in userCards"
            :key="idx"            
            :userCard="userCard"
            :idx="idx"
          ></ui-comp-user-card>
        </div>
        <ui-button-main 
          class="main__button"
          :isDisabled="isDisabled"
          :title="btnBotName"
          @buttonClick="handleClick()"
        >{{ btnBotName }}</ui-button-main>
      </div>
    </div>
  </main>
</template>

<script>
import uiCompUserCard from '@/components/ui-comp-user-card.vue'
// import photo from '@/assets/images/photo-cover.svg'
export default {
  components: { uiCompUserCard },
  name: 'ui-comp-main',
  data() {
    return{
      title: 'Working with GET request',
      userCard: {
        id: 0,
        photo: 'url("@/assets/images/photo-cover.svg")',
        name: 'Salvador Stewart Flynn Thomas...',
        job: 'Frontend Developer Frontend ...',
        email: 'frontend_develop@gmail.com',
        phone: '+38 (098) 278 44 24',
      },
      btnBotName: 'Show more',
      isDisabled: false
    }
  },
  methods: {
    handleClick() { console.log('main button clicked') }
  },
  computed: {
    userCards () {
      const arr = []
      for (let i = 0; i <= 5; i++) { arr.push(this.userCard) }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-comp-main, 
.main {
  background-color: $bg-color1;
  &__container {
    @include container-width;
    margin: 0 auto;
    // @include gide-lines;
  }
  &__wrapper {
    padding-top: 140px;
    // @include gide-lines;
    // border: 1px solid teal;
  }
  &__title {
    text-align: center;
    @include heading1;
    margin-bottom: 50px;
  }
  &__card-gallery {
    display: grid;
    @include main-gallery;
    grid-auto-flow: row;
    margin-bottom: 50px;
  }
  &__button {
    margin: 0 auto;
  }
  .ui-button-main, .button {
    width: 120px;
  }
  .ui-button-main, .button:hover {
    cursor: pointer;

  }
}
</style>