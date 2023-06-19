<script lang="ts" setup></script>

<template>
  <div class="task-card">
    <div class="task-card__row">
      <h3 class="task-card__heading">Buy milk and bread</h3>
      <div class="task-card__actions"></div>
    </div>
    <p class="task-card__description">
      Do NOT buy milk >10% fat content and try to find black bread without poppy seeds
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
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-card__heading {
  font-size: 16px;
  font-weight: 400;
}

.task-card__description {
  width: 100%;
  color: var(--dark-color);
  line-height: 1.4;
  font-weight: 300;
  opacity: 0.6;
}
</style>
