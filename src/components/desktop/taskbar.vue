<template>
  <div class="taskbar">
    <startMenu />
    <taskList />
    <statePanel class="taskbar__state-panel" />
  </div>
</template>

<script>
import startMenu from '../main_sys/taskbar/start-menu';
import taskList from '../main_sys/taskbar/task-list';
import statePanel from '../main_sys/taskbar/state-panel';

export default {
  name: 'taskbar',
  data () {
    return {

    };
  },
  components: {
    startMenu,
    taskList,
    statePanel
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
  &__state-panel
    margin-left: auto
</style>
