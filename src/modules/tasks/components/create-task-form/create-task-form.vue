<script lang="ts" setup>
import commonInput from '@/common/components/common-input.vue'
import commonTextarea from '@/common/components/common-textarea.vue'
import commonButton from '@/common/components/common-button.vue'
</script>

<template>
  <form @submit.prevent class="create-task-form">
    <h2 class="create-task-form__heading">Add new task</h2>
    <common-input
      label="Title"
      placeholder="Here is new awesome task title"
      class="create-task-form__field"
    />
    <common-textarea
      label="Description"
      placeholder="Tell a little more about task"
      class="create-task-form__field"
    />
    <common-button class="create-task-form__button">Add task</common-button>
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

.create-task-form__field {
  margin-bottom: 20px;
}

.create-task-form__field:last-child {
  margin-bottom: 0;
}

.create-task-form__button {
  width: 100%;
}
</style>
