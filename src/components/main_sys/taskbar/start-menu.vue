<template>
  <button class="start-menu"></button>
</template>

<script>
export default {
  name: 'start-menu',
  data () {
    return {

    };
  }
};
</script>

<style lang="sass" scoped>
.start-menu
  width: 50px
  height: 100%
  border: none
  background: transparent url(/static/start-menu.png) no-repeat center center / 26px 26px
  color: #fff
  outline: none

  transition: all .3s ease
  &:hover
    background-color: #111111
</style>
