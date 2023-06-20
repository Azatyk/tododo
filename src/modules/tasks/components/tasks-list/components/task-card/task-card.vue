<script lang="ts" setup>
import { ref } from 'vue'
import commonCheckbox from '@/common/components/common-checkbox.vue'
import commonLinkButton from '@/common/components/common-link-button.vue'

defineProps({
  uniqueKey: {
    type: String,
    required: true
  }
})

const taskCompleted = ref(false)
</script>

<template>
  <div class="task-card">
    <div class="task-card__row">
      <h3 class="task-card__heading">Buy milk and bread</h3>
      <div class="task-card__actions">
        <common-link-button class="task-card__action">Delete</common-link-button>
        <common-checkbox v-model="taskCompleted" :unique-key="uniqueKey" />
      </div>
    </div>
    <p class="task-card__description">
      Do NOT buy milk less then 10 percent fat content and try to find black bread without poppy
      seeds. Second point is not such important as first
    </p>
  </div>
</template>

<style scoped>
.task-card {
  padding-left: 24px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.task-card:before {
  content: '—';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--dark-color);
  font-size: 16px;
}

.task-card__row {
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-card__heading {
  font-size: 16px;
  font-weight: 400;
}

.task-card__actions {
  margin-right: 10px;
  display: flex;
  align-items: flex-start;
}

.task-card__action {
  margin-right: 16px;
}

.task-card__description {
  width: calc(100% - 50px);
  color: var(--dark-color);
  line-height: 1.5;
  font-weight: 300;
  opacity: 0.6;
}
</style>
