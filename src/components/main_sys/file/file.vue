<template>
  <div class="file" @mousedown.stop="sendEmit" :class="{ click: isClicked }">
    <img class="file__icon" :src="imageUrl" :alt="title" draggable="false">
    <span class="file__title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'file',
  data () {
    return {
      isClicked: false
    };
  },
  props: ['title', 'imageUrl'],
  methods: {
    sendEmit () {
      this.$emit('mousedown', this);
    },
    changeState (to) {
      this.isClicked = to;
    }
  }
};
</script>

<style lang="sass" scoped>
.file
  text-align: center
  font-size: 12px
  border: 1px solid transparent
  padding-bottom: 3px
  padding-top: 1px
  &__icon
    display: block
    width: 50px
    height: 50px
    margin: 0 auto 4px
  &__title
    display: block
    line-height: 1.1em
  &:hover
    background: rgba(#70C0E7, .2)
    border-color: #70C0E7

  &.click
    background: rgba(#66A7E8, .3)
    border-color: #66A7E8
</style>
