<template>
  <div class="desktop-area">
    <windowFrame :title="'C:\\WEB\\web_windows - Sublime Text'" />
  </div>
</template>

<script>
import windowFrame from '../main_sys/window_frame/window-frame';

export default {
  name: 'desktop-area',
  components: {
    windowFrame
  },
  data () {
    return {

    };
  }
};
</script>

<style scoped lang="sass">
.desktop-area
  width: 100%
  height: 100%
  background: url(back.jpg) no-repeat center top / cover
</style>
