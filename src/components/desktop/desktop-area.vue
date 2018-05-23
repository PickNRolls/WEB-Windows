<template>
  <div class="desktop-area">
    <workarea :files="files" :customStyle="{ color: '#fff', textShadow: '0 0 3px #000'}" />
    <windowFrame :files="files" />
  </div>
</template>

<script>
import workarea from '../main_sys/work_area/work-area';
import windowFrame from '../main_sys/window_frame/window-frame';

export default {
  name: 'desktop-area',
  data () {
    return {
      files: [{title: 'Sublime Text 3', imageUrl: '/static/sublime.png'}, {title: 'Photoshop', imageUrl: '/static/photoshop.jpg'}]
    };
  },
  components: {
    workarea,
    windowFrame
  }
};
</script>

<style scoped lang="sass">
.desktop-area
  width: 100%
  height: 100%
  background: url(/static/back.jpg) no-repeat center top / cover
</style>
