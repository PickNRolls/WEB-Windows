<template>
  <ul class="row" :style="elementStyle">
    <li class="row__item" v-for="file in files">
      {{ file.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'work-area-row',
  data () {
    return {

    };
  },
  props: ['files', 'allowableWidth'],
  computed: {
    elementStyle () {
      var width = this.files.length * (69 + 5);
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
  &__item
    border: 1px solid #000
    min-width: 69px
    min-height: 75px
    flex: 1
    flex-grow: 0
    flex-shrink: 0
    margin-right: 5px
    margin-bottom: 10px
</style>
