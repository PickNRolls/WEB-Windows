<template>
  <ul class="tasks">
    <li class="tasks__item" v-for="item in tasks" :key="item.id">
      <task />
    </li>
  </ul>
</template>

<script>
import task from './task';

export default {
  name: 'task-list',
  data () {
    return {
      tasks: ['sublime', 'photoshop']
    };
  },
  components: {
    task
  }
};
</script>

<style lang="sass" scoped>
.tasks
  display: flex
  list-style: none
  &__item
    width: 58px
    margin-right: 4px
</style>
