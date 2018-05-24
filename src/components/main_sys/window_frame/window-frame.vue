<template>
  <div class="window-frame"
    v-if="open"
    :class="{ 'full-screen': full }"
    :style="posOptions.style"
  >
    <frameTop class="window-frame__top"
      :title="title"

      @roll="roll"
      @full-screen="fullScreen"
      @close="close"
      @mousedown="increaseZIndex"
    />
    <workarea
      :files="files"
      :folders="folders"
    />
  </div>
</template>

<script>
import workarea from '../work_area/work-area';
import frameTop from './frame-top';

export default {
  name: 'window-frame',
  data () {
    return {
      open: true,
      full: false,
      posOptions: {
        lastX: 0,
        lastY: 0,
        style: {
          transform: null,
          zIndex: 1
        }
      }
    };
  },
  components: {
    workarea,
    frameTop
  },
  props: ['title', 'files', 'folders'],
  methods: {
    roll () {
      console.log('Rolled to tray!');
    },
    fullScreen () {
      if (this.full) this.full = false;
      else {
        this.full = true;
        this.posOptions.style.transform = '';
        this.posOptions.lastX = 0;
        this.posOptions.lastY = 0;
      }
    },
    close () {
      this.open = false;
    },
    increaseZIndex () {
      this.posOptions.style.zIndex++;
    },

    _mousemove (data) {
      var e = data.e;
      var x = this.posOptions.lastX + e.clientX - data.startPos.x;
      var y = this.posOptions.lastY + e.clientY - data.startPos.y;
      this.posOptions.style.transform = `translate(${x}px, ${y}px)`;
    },
    _mouseup (data) {
      this.posOptions.lastX += data.e.clientX - data.startPos.x;
      this.posOptions.lastY += data.e.clientY - data.startPos.y;
    }
  },
  mounted () {
    var componentContext = this;
    var frameTop = this.$children[0].$el;

    this.$dragNDrop({
      el: frameTop,
      callbacks: {
        mousemove: componentContext._mousemove,
        mouseup: componentContext._mouseup
      },
      mouseupOnDocument: true,
      mousemoveOnDocument: true
    });
  }
};
</script>

<style lang="sass" scoped>
.window-frame
  width: 800px
  height: 600px
  border: 5px solid #71D2D2
  border-top: none
  box-shadow: 0 0 5px rgba(#000, .2)
  background: #fff
  position: absolute
  top: 0
  left: 0
  &.full-screen
    width: 100%
    height: 100%
    border: none
    .window-frame__top
      padding: 0 3px
  &__top
    width: 100%
    margin-right: -5px
    float: left
</style>
