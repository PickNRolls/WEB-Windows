<template>
  <div class="work-area" @mouseleave="_restoreHighlight">
    <div class="work-area__highlight"
      v-show="highlightOptions.mousedowned"
      :style="highlightOptions.style"
    />

    <row
      :files="files"
      :allowableWidth="width"
    />
  </div>
</template>

<script>
import row from './work-area-row';

export default {
  name: 'work-area',
  data () {
    return {
      files: [{title: 'Sublime Text 3', imageUrl: '/static/sublime.png'}],
      width: 800,
      highlightOptions: {
        mousedowned: false,
        oldTransform: null,
        style: {
          width: null,
          height: null,
          transform: null
        }
      }
    };
  },
  components: {
    row
  },
  methods: {
    addFile () {
      this.handleResize();
    },
    _handleResize () {
      this.width = this.$el.clientWidth;
    },
    _mousedown (data) {
      var x = data.startPos.x - data.shiftPos.x;
      var y = data.startPos.y - data.shiftPos.y;
      var options = this.highlightOptions;
      options.style.transform = options.oldTransform = `translate(${x}px, ${y}px)`;
      options.mousedowned = true;
    },
    _mousemove (data) {
      var e = data.e;
      var width = e.clientX - data.startPos.x;
      var height = e.clientY - data.startPos.y;

      var oldTransform = this.highlightOptions.oldTransform;
      var style = this.highlightOptions.style;

      if (width < 0 && height < 0) {
        style.transform = oldTransform + ' scale(-1, -1)';
        width *= -1;
        height *= -1;
      }
      else if (width < 0 && height >= 0) {
        style.transform = oldTransform + ' scale(-1, 1)';
        width *= -1;
      }
      else if (width >= 0 && height < 0) {
        style.transform = oldTransform + ' scale(1, -1)';
        height *= -1;
      } else {
        style.transform = oldTransform;
      }

      style.width = width + 'px';
      style.height = height + 'px';
    },
    _restoreHighlight () {
      var options = this.highlightOptions;
      var style = options.style;

      options.mousedowned = false;
      style.width = 0;
      style.height = 0;
      style.transform = '';
    }
  },
  mounted () {
    var componentContext = this;
    window.addEventListener('resize', this._handleResize);

    this.$dragNDrop({
      el: componentContext.$el,
      callbacks: {
        mousedown: componentContext._mousedown,
        mousemove: componentContext._mousemove,
        mouseup: componentContext._restoreHighlight
      },
      mouseupOnDocument: true
    });
  }
};
</script>

<style lang="sass" scoped>
.work-area
  width: 100%
  height: 100%
  background: #fff
  &__highlight
    width: 0
    height: 0
    border: 1px solid #0078d7
    background: rgba(#0078d7, .3)
    position: absolute
    transform-origin: 0 0

.icon-rows
  display: flex
  flex-direction: column
  height: 100%
  list-style: none
</style>
