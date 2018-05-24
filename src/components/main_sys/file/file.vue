<template>
  <div class="file"
    :class="{ click: isClicked }"
    @mousedown.stop="selfEmit('mousedown')"
    @dblclick="start">
    <img class="file__icon" :src="imageUrl" :alt="title" draggable="false">
    <span class="file__title">{{ title }}</span>
  </div>
</template>

<script>
import fileMixin from './file-mixin';

export default {
  name: 'file',
  extends: fileMixin,
  props: ['imageUrl']
};
</script>

<style lang="sass" scoped>
@import './file-style'
</style>
