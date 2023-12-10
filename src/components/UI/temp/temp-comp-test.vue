<template>
  <div class="ui-test block">
    <div class="block__wrapper">
      <p class="block__par-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum natus dolorum, sapiente porro nemo delectus earum quasi velit corporis ut quos deleniti temporibus et ea. Id, unde reiciendis. Autem, assumenda.</p>
    </div>
    <div class="block__bl-2">
      tool-tip
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'ui-test',
  data() {
    return{

    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.ui-test, 
.block {
  margin: 50px;
  position: relative;
  &__wrapper {
    width: 380px;
    // height: 40px;

    // white-space: nowrap;
    // text-overflow: ellipsis;
    // overflow: hidden;

  }
  &__par-1 {
    // width: inherit;
    // height: inherit;
    padding: 4px 10px;
    @include body16;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #eec5c5;
  }
  &__bl-2 {
    position: absolute;
    top: 25px;
    left: 20px;
    @include body16;
    color: white;
    background-color: olivedrab;
    display: inline-block;
    padding: 4px 10px;
  }

}

</style>