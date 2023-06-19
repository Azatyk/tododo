<script lang="ts" setup></script>

<template>
  <div class="tasks-list">
    <div class="tasks-list__header">
      <h2 class="tasks-list__heading">Your tasks</h2>
    </div>
  </div>
</template>

<style scoped>
.tasks-list {
  padding: 20px 16px;
  box-sizing: border-box;
  width: 100%;
  min-height: 250px;
  background-color: var(--white-color);
  border: var(--border);
  border-radius: var(--border-radius);
}

.tasks-list__header {
  width: 100%;
}

.tasks-list__heading {
  margin-bottom: 14px;
  color: var(--dark-color);
  font-size: 20px;
  font-weight: 500;
}
</style>
