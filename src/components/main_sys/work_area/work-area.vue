<template>
  <div class="work-area"
    @mousedown="_mousedown"
    @mouseup="_restoreHighlight"
    @mousemove="_mousemove"
    @mouseleave="_restoreHighlight"
  >
    <div class="work-area__highlight"
      v-shown="highlightOptions.mousedowned"
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
      count: 0,
      width: 800,
      highlightOptions: {
        mousedowned: false,
        oldTransform: null,
        startPos: { x: null, y: null },
        offset: { x: null, y: null },
        style: {
          width: null,
          height: null,
          transform: null,
          transformOrigin: '0 0'
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
      var x = e.clientX;
      var y = e.clientY;
      options.mousedowned = true;
      options.startPos.x = x;
      options.startPos.y = y;

      options.style.transform = options.oldTransform = `translate(${x}px, ${y}px)`;
    },
    _mousemove(e) {
      if (this.highlightOptions.mousedowned) {
        var options = this.highlightOptions;
        var startPos = options.startPos;
        var style = options.style;
        var width = e.clientX - startPos.x;
        var height = e.clientY - startPos.y;

        var oldTransform = options.oldTransform;
        if (width < 0 && height < 0) {
          style.transform = oldTransform + ' scale(-1, -1)';
          width *= -1;
          height *= -1;
        }
        else if (width < 0 && height > 0) {
          style.transform = oldTransform + ' scale(-1, 1)';
          width *= -1;
        }
        else if (width > 0 && height < 0) {
          style.transform = oldTransform + ' scale(1, -1)';
          height *= -1;
        } else {
          style.transform = oldTransform;
        }

        options.style.width = width + 'px';
        options.style.height = height + 'px';
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
    this.$el.onselectstart = function() { return false; };
  }
};
</script>

<style lang="sass" scoped>
.work-area
  width: 800px
  height: 100%
  &__highlight
    width: 0
    height: 0
    border: 1px solid #0078d7
    background: rgba(#0078d7, .3)
    position: absolute

.icon-rows
  display: flex
  flex-direction: column
  height: 100%
  list-style: none
</style>
