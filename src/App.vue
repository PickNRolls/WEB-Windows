<template>
  <div id="app">
    <router-view/>
    <desktopArea></desktopArea>
  </div>
</template>

<script>
import desktopArea from './components/desktop/desktop-area';
export default {
  name: 'App',
  components: {
    desktopArea
  },
  mounted () {
    this.$el.onselectstart = function() { return false; };
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
