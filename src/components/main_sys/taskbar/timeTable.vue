<template>
  <div class="time">
    <span class="time__line time__line--locale">{{ hour }}:{{ minute }}</span>
    <span class="time__line">{{ commonDate }}</span>
  </div>
</template>

<script>
export default {
  name: 'timeTable',
  data () {
    return {
      currentDate: new Date()
    };
  },
  computed: {
    minute () {
      var min = this.currentDate.getMinutes();
      if (min < 10) min = '0' + min;
      return min;
    },
    hour () {
      return this.currentDate.getHours();
    },
    commonDate () {
      var day = this.currentDate.getUTCDate() + 1;
      var month = this.currentDate.getMonth() + 1;
      var year = this.currentDate.getUTCFullYear();

      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
      return `${day}.${month}.${year}`;
    }
  }
};
</script>

<style lang="sass" scoped>
.time
  text-align: center
  color: #fff
  font-size: 12px
  text-shadow: 0 0 2px rgba(#000, .8)
  padding-top: 4px
  &__line
    display: block
    &--locale
      margin-bottom: 3px
</style>
