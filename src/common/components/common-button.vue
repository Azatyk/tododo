<script lang="ts" setup>
import type { PropType } from 'vue'

enum CommonButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

defineProps({
  type: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
  size: {
    type: String as PropType<'normal' | 'large'>
  },
  icon: {
    type: String
  }
})
</script>

<template>
  <button
    :class="[
      'common-button',
      {
        'common-button_primary': type === CommonButtonTypes.PRIMARY,
        'common-button_secondary': type === CommonButtonTypes.SECONDARY
      }
    ]"
  >
    <slot></slot>
    <i :class="['bx', { icon }]"></i>
  </button>
</template>

<style scoped>
.common-button {
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Criteria-CF', sans-serif;
  border: var(--border);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: 200ms ease-in-out;
}

.common-button:hover {
  opacity: 0.7;
}

.common-button_primary {
  color: var(--white-color);
  background-color: var(--dark-color);
}

.common-button_secondary {
  color: var(--dark-color);
  background-color: transparent;
}
</style>
