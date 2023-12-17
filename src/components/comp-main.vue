<template>
  <main class="comp-main main" id="main">
    <div class="main__container">
      <div class="main__wrapper">
        <h1 class="main__title">{{ title }}</h1>
        <div class="main__gallery" v-if="users">
          <transition-group name="user-cards" appear>
            <ui-comp-user-card
              class="main__ui-card"
              v-for="(card, idx) in users"
              :key="card.id"
              :userCard="card"
              :style="`--i: ${idx}`"
            ></ui-comp-user-card>
          </transition-group>
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
      errMessage: 'Users info hasn\'t been loaded'
    }
  },
  computed: {
    ...mapGetters('serverData', ['users', 'urls', 'nextUrl']),

    next() { return this.nextUrl === null ? false : true },
  },

  methods: {
    ...mapActions('serverData', ['getFromServ']),

    handleClick() {
      if (this.next) this.getFromServ({ url: this.nextUrl, idn: 'users' })
    }
  },

  mounted() {
    this.getFromServ({ url: this.urls.urlStart, idn: 'users' })
  },
}
</script>

<style lang="scss" scoped>
.comp-main, 
.main {
  background-color: $bg-color1;
  padding: 70px 0;
  &__container {
    @include container-width;
    margin: 0 auto;
  }
  &__wrapper {
    width: inherit;
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
    flex: 1;
    width: inherit;
    margin-bottom: 50px;
    display: grid;
    @include main-gallery;
    grid-auto-flow: row;
  }
  &__err-msg {
    @include body16;
    color: $error;
    text-align: center;
  }
  // &__button { }
  .ui-button-main, .button {
    width: 120px;
  }
  .ui-button-main, .button:hover {
    cursor: pointer;

  }
  .user-cards-enter-active {
    transition: all 0.4s ease;
    transition-delay: calc(0.1s * var(--i));
  }
  .user-cards-enter-from {
    transform: scale(0.5);
    opacity: 0.5;
  }
}
</style>