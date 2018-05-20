<template>
  <div class="buttons">
    <button class="button roll" @click="$emit('roll')">R</button>
    <button class="button full-screen" @click="$emit('full-screen')">F</button>
    <button class="button close" @click="$emit('close')">×</button>
  </div>
</template>

<script>
export default {
  name: 'frame-buttons',
  data () {
    return {

    };
  }
};
</script>

<style lang="sass" scoped>
.buttons
  display: flex
  justify-content: flex-end
  width: 180px

.button
  display: block
  width: 25px
  height: 20px
  line-height: 21px
  font-size: 10px
  border: none
  background: none
  outline: none
  margin-right: 1px

  transition: background .2s ease
  &.close
    width: 45px
    background: #d23f3f
    color: #fff
    font-size: 19px
    margin-right: 0
    &:hover
      background: lighten(#d23f3f, 3%)
  &:hover
    background: #5339F6
    color: #fff
</style>
