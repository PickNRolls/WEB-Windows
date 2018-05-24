<template>
  <div class="desktop-area">
    <workarea :files="files" :folders="folders" :customStyle="{ color: '#fff', textShadow: '0 0 3px #000'}" />

    <template v-for="frame in openFramesStore">
      <windowFrame :title="frame.title" :files="frame.files" :folders="frame.folders" />
    </template>
  </div>
</template>

<script>
import workarea from '../main_sys/work_area/work-area';
import windowFrame from '../main_sys/window_frame/window-frame';

import openFramesStore from '../../store/openFrames.json';

export default {
  name: 'desktop-area',
  data () {
    return {
      files: [{title: 'Sublime Text 3', imageUrl: '/static/sublime.png'}, {title: 'Photoshop', imageUrl: '/static/photoshop.jpg'}],
      folders: [{title: 'Sublime Text 3', folderID: 0}, {title: 'Photoshop', folderID: 1}],
      openFramesStore
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

.window-frame-store
  position: absolute
  top: 0
  left: 0
</style>
