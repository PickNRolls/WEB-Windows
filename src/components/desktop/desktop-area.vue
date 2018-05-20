<template>
  <windowFrame :title="'C:\\WEB\\web_windows - Sublime Text'" />
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

</style>
