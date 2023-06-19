<script lang="ts" setup>
import tasksList from '../components/tasks-list/tasks-list.vue'
import createTaskForm from '../components/create-task-form/create-task-form.vue'
</script>

<template>
  <div class="tasks-view">
    <tasks-list />
    <create-task-form />
  </div>
</template>

<style scoped>
.tasks-view {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
}
</style>
