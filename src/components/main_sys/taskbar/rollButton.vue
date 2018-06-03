<template>
  <button class="roll-button">

  </button>
</template>

<script>
export default {
  name: 'roll-button',
  data () {
    return {

    };
  }
};
</script>

<style lang="sass" scoped>
.roll-button
  width: 7px
  height: 100%
  border: none
  background: none
  transition: background .25s ease
  &:hover
    background: #fff
</style>
