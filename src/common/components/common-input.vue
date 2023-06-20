<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String
  },
  label: {
    type: String
  },
  placeholder: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="common-input">
    <label v-if="label" for="common-input__field" class="common-input__label">
      {{ label }}
    </label>
    <input
      :placeholder="placeholder"
      type="text"
      id="common-input__field"
      class="common-input__field"
      @input="updateValue"
    />
  </div>
</template>

<style scoped>
.common-input {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.common-input__label {
  margin-bottom: 6px;
  font-size: 15px;
}

.common-input__field {
  padding: 14px 6px 14px 14px;
  box-sizing: border-box;
  width: 100%;
  font-family: 'Criteria-CF', sans-serif;
  font-size: 13px;
  font-weight: 400;
  background-color: var(--white-color);
  border: 1px solid var(--dark-color);
  border-radius: var(--border-radius);
  outline: none;
  transition: 200ms ease-in-out;
}

.common-input__field:focus {
  padding-left: 16px;
}

.common-input::placeholder {
  color: var(--grey-color);
}
</style>
