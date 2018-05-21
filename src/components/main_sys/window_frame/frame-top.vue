<template>
  <div class="frame-top">
    <h6 class="frame-top__title">
      {{ title }}
    </h6>
    <frameButtons class="frame-top__buttons"
      @roll="$emit('roll')"
      @full-screen="$emit('full-screen')"
      @close="$emit('close')"
    />
  </div>
</template>

<script>
import frameButtons from './frame-buttons';
export default {
  name: 'frame-top',
  data () {
    return {

    }
  },
  components: {
    frameButtons
  },
  props: ['title']
}
</script>

<style lang="sass" scoped>
.frame-top
  background: #84d7da
  display: flex
  justify-content: flex-end
  &__title
    height: 24px
    line-height: 24px
    font-weight: 400
    font-size: 15px
    margin-right: auto
    margin-left: auto
  &__buttons
    margin-right: -97px
    position: relative
    right: 97px
</style>
