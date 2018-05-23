<template>
  <div class="taskbar">
    <startMenu />
    <taskList />
  </div>
</template>

<script>
import startMenu from '../main_sys/taskbar/start-menu';
import taskList from '../main_sys/taskbar/task-list';

export default {
  name: 'taskbar',
  data () {
    return {

    };
  },
  components: {
    startMenu,
    taskList
  }
};
</script>

<style lang="sass" scoped>
.taskbar
  display: flex
  width: 100%
  height: 40px
  background: rgba(darken(#71D2D2, 24%), .35)

  position: fixed
  left: 0
  bottom: 0
</style>
