<template>
  <div class="task" :class="{ active: isActive }">
    <img class="task__picture" :src="image" :alt="title">
  </div>
</template>

<script>
export default {
  name: 'task',
  data () {
    return {
      title: 'Sublime Text 3',
      image: '/static/sublime.png',
      isActive: false
    };
  }
};
</script>

<style lang="sass" scoped>
.task
  height: 100%
  border: 1px solid #98ADAC
  background-color: #5F7E7E
  &__picture
    display: block
    max-width: 100%
    height: 100%
    margin: 0 auto
  &.active
    background-image: linear-gradient(to top, lighten(#5F7E7E, 16%) 0%, #5F7E7E 100%)
</style>
