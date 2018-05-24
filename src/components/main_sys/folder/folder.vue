<template>
  <div class="file"
    :class="{ click: isClicked }"

    @mousedown.stop="selfEmit('mousedown')"
    @dblclick="start"
    >
    <img class="file__icon" src="/static/folder-icon.png" :alt="title" draggable="false">
    <span class="file__title">{{ title }}</span>
  </div>
</template>

<script>
import fileMixin from '../file/file-mixin';
import folderStore from '../../../store/folders.json';

import openFramesStore from '../../../store/openFrames.json';

export default {
  name: 'folder',
  extends: fileMixin,
  props: ['folderID'],
  methods: {
    start () {
      var id = this.folderID;
      var folderFrame = folderStore[id];

      if (folderFrame) {
        openFramesStore.push(folderFrame);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../file/file-style';
</style>
