<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Boolean
  },
  uniqueKey: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <div class="common-checkbox">
    <input
      :checked="modelValue"
      :id="uniqueKey"
      type="checkbox"
      class="common-checkbox__field"
      @change="updateValue"
    />
    <label :for="uniqueKey" class="common-checkbox__label">
      <i v-if="modelValue" class="bx bx-check common-checkbox__icon" />
    </label>
  </div>
</template>

<style scoped>
.common-checkbox {
  position: relative;
}

.common-checkbox__field {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.common-checkbox__label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: 1px solid var(--dark-color);
  cursor: pointer;
  transition: 80ms ease-in-out;
}

.common-checkbox__label:hover {
  border-width: 2px;
}

.common-checkbox__field:checked + .common-checkbox__label {
  border-width: 2px;
}

.common-checkbox__icon {
  color: var(--dark-color);
  font-size: 17px;
}
</style>
