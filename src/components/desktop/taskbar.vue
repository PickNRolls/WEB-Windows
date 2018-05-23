<template>
  <div class="taskbar">
    <startMenu />
  </div>
</template>

<script>
import startMenu from '../main_sys/taskbar/start-menu';

export default {
  name: 'taskbar',
  data () {
    return {

    };
  },
  components: {
    startMenu
  }
};
</script>

<style lang="sass" scoped>
.taskbar
  width: 100%
  height: 40px
  background: rgba(darken(#71D2D2, 24%), .35)

  position: fixed
  left: 0
  bottom: 0
</style>
