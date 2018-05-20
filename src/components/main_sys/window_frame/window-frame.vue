<template>
  <div class="window-frame" v-if="open" :class="{ 'full-screen': full }">
    <frameTop class="window-frame__top"
      :title="title"

      @roll="roll"
      @full-screen="fullScreen"
      @close="close"
    />
    <workarea />
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
      full: false
    };
  },
  components: {
    workarea,
    frameTop
  },
  props: ['title'],
  methods: {
    roll() {
      console.log('Rolled to tray!');
    },
    fullScreen() {
      if (this.full) this.full = false;
      else this.full = true;
    },
    close() {
      this.open = false;
    }
  }
}
</script>

<style lang="sass" scoped>
.window-frame
  width: 800px
  height: 600px
  border: 5px solid #84d7da
  border-top: none
  box-shadow: 0 0 5px rgba(#000, .2)
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
