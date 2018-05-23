<template>
  <div id="app">
    <router-view/>
    <desktopArea />
    <taskbar />
  </div>
</template>

<script>
import desktopArea from './components/desktop/desktop-area';
import taskbar from './components/desktop/taskbar';

export default {
  name: 'App',
  components: {
    desktopArea,
    taskbar
  },
  mounted () {
    this.$el.onselectstart = function () { return false; };
  }
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

body,
html,
#app
  font-family: 'Roboto', sans-serif
  height: 100%
  cursor: default
  overflow: hidden
</style>
