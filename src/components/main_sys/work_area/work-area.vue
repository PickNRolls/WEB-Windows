<template>
  <div class="work-area"
    @mousedown="_mousedown"
    @mouseup="_restoreHighlight"
    @mousemove="_mousemove"
    @mouseleave="_restoreHighlight"
  >
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
      files: [{name: 'Sublime Text 3'}],
      width: 800,
      highlightOptions: {
        mousedowned: false,
        oldTransform: null,
        startPos: { x: null, y: null },
        coordRect: { x: null, y: null},
        offset: { x: null, y: null },
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
    _mousedown(e) {
      var options = this.highlightOptions;
      var coordRect = this.highlightOptions.coordRect = this.$el.getBoundingClientRect()
      var x = e.clientX - coordRect.left;
      var y = e.clientY - coordRect.top;
      options.mousedowned = true;
      options.startPos.x = x;
      options.startPos.y = y;

      options.style.transform = options.oldTransform = `translate(${x}px, ${y}px)`;
    },
    _mousemove(e) {
      if (this.highlightOptions.mousedowned) {
        var options = this.highlightOptions;
        var startPos = options.startPos;
        var coordRect = this.highlightOptions.coordRect;
        var style = options.style;
        var width = e.clientX - startPos.x - coordRect.x;
        var height = e.clientY - startPos.y - coordRect.y;

        var oldTransform = options.oldTransform;
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
        console.log(width);
      }
    },
    _restoreHighlight() {
      var options = this.highlightOptions;
      var style = options.style;

      options.mousedowned = false;
      style.width = 0;
      style.height = 0;
      style.transform = '';
    }
  },
  mounted () {
    window.addEventListener('resize', this._handleResize);
  }
};
</script>

<style lang="sass" scoped>
.work-area
  width: 100%
  height: 100%
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
