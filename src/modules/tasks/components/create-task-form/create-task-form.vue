<script lang="ts" setup>
import commonInput from '@/common/components/common-input.vue'
</script>

<template>
  <form class="create-task-form">
    <h2 class="create-task-form__heading">Add new task</h2>
    <common-input label="Title" placeholder="Here is new awesome task title" />
  </form>
</template>

<style scoped>
.create-task-form {
  padding: 20px 16px;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--white-color);
  border: var(--border);
  border-radius: var(--border-radius);
}

.create-task-form__heading {
  margin-bottom: 14px;
  color: var(--dark-color);
  font-size: 20px;
  font-weight: 500;
}
</style>
