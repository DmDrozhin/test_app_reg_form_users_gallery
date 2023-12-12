<template>
  <main class="comp-main main" id="main">
    <div class="main__container">
      <ui-loader class="main__loader" v-if="false"></ui-loader>
      <div class="main__wrapper">
        <h1 class="main__title">{{ title }}</h1>
        <div class="main__gallery" v-if="users">
          <ui-comp-user-card
            class="main__ui-card"
            v-for="card in users"
            :key="card.id"
            :userCard="card"
          ></ui-comp-user-card>
        </div>
        <div class="main__err-msg" v-else>{{ errMessage }}</div>
        <ui-button-main 
          v-if="nextUrl"
          class="main__button"
          :isDisabled="!nextUrl"
          :title="'Show more'"
          @buttonClick="handleClick()"
        >{{ btnBotName }}</ui-button-main>
      </div>
    </div>
    
  </main>
</template>

<script>
import uiCompUserCard from '@/components/ui-comp-user-card.vue'
import uiLoader from '@/components/UI/ui-loader.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { uiCompUserCard, uiLoader },
  name: 'comp-main',
  data() {
    return{
      title: 'Working with GET request',
      errMessage: 'Users info hasn\'t been loaded',
    }
  },
  computed: {
    ...mapGetters('serverData', ['users', 'urls', 'nextUrl']),

    next() { return this.nextUrl === null ? false : true },
    // isLoader() { return this.loadStat.idn === 'users' ? this.loadStat.isON : false }
  },

  methods: {
    ...mapActions('serverData', ['getFromServ']),

    handleClick() {
      if (this.next) this.getFromServ({ url: this.nextUrl, idn: 'users' })
    },
  },

  mounted() {
    this.getFromServ({ url: this.urls.urlStart, idn: 'users' })
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.comp-main, 
.main {
  background-color: $bg-color1;
  // background-color: #a3edcd;
  padding: 70px 0;
  &__container {
    position: relative;
    @include container-width;
    margin: 0 auto;
    // @include gide-lines;
  }
  &__loader {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }
  &__wrapper {
    width: inherit;
    // @include gide-lines;
    // border: 1px solid teal;
    @include gallery-container;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    text-align: center;
    @include heading1;
    margin-bottom: 50px;
  }
  &__gallery {
    width: inherit;
    flex: 1;
    display: grid;
    @include main-gallery;
    grid-auto-flow: row;
    margin-bottom: 50px;
  }
  &__err-msg {
    @include body16;
    color: $error;
    text-align: center;
    // margin-bottom: 50px;
  }
  // &__button {

  // }
  .ui-button-main, .button {
    width: 120px;
  }
  .ui-button-main, .button:hover {
    cursor: pointer;

  }
}
</style>