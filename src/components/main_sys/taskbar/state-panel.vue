<template>
  <div class="state-panel">
    <timeTable class="state-panel__time" />
    <rollButton class="state-panel__roll" />
  </div>
</template>

<script>
import timeTable from './timeTable';
import rollButton from './rollButton';

export default {
  name: 'state-panel',
  data () {
    return {

    };
  },
  components: {
    timeTable,
    rollButton
  }
};
</script>

<style lang="sass" scoped>
.state-panel
  display: flex
  &__time
    height: 100%
  &__roll
    margin-left: 11px
</style>