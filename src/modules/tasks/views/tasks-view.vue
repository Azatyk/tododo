<script lang="ts" setup>
import createTaskForm from '../components/create-task-form/create-task-form.vue'
</script>

<template>
  <div class="tasks-view">
    <div class="tasks-list"></div>
    <create-task-form />
  </div>
</template>

<style scoped>
.tasks-view {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
}

.tasks-list {
  width: 100%;
  height: 300px;
  background-color: var(--white-color);
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
