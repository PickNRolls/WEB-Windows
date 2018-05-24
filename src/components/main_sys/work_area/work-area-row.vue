<template>
  <ul class="row" :style="elementStyle">
    <li class="row__item" v-for="_file in files" :key="_file.id">
      <file
        :title="_file.title"
        :imageUrl="_file.imageUrl"

        @mousedown="changeState"
      />
    </li>

    <li class="row__item" v-for="_folder in folders" :key="_folder.id">
      <folder
        :title="_folder.title"
        :folderID="_folder.folderID"

        @mousedown="changeState"
      />
    </li>
  </ul>
</template>

<script>
import file from '../file/file';
import folder from '../folder/folder';

export default {
  name: 'work-area-row',
  data () {
    return {
      clickedFile: null
    };
  },
  props: ['files', 'folders', 'allowableWidth'],
  components: {
    file,
    folder
  },
  methods: {
    changeState (file) {
      if (file !== this.clickedFile && this.clickedFile !== null) {
        this.clickedFile.changeState(false);
      }

      file.changeState(true);
      this.clickedFile = file;
    }
  },
  computed: {
    elementStyle () {
      var width;
      if (!this.folders) {
        width = this.files.length * (69 + 5);
      } else {
        width = (this.folders.length + this.files.length) * (69 + 5);
      }

      var fileWidth = 74;

      if (this.allowableWidth - width < fileWidth) {
        width = '100%';
      } else {
        width += 'px';
      }

      return { width };
    }
  },
  watch: {
    allowableWidth (newVal) {
      this.allowableWidth = newVal;
    }
  }
};
</script>

<style lang="sass" scoped>
.row
  display: flex
  align-items: flex-start
  flex-wrap: wrap
  list-style: none
  margin-left: 10px
  padding-top: 10px
  &__item
    min-width: 69px
    min-height: 75px
    flex: 1
    flex-grow: 0
    flex-shrink: 0
    margin-right: 1px
</style>
