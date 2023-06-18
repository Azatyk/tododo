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
  <div class="common-textarea">
    <label v-if="label" for="common-textarea__label" class="common-textarea__label">
      {{ label }}
    </label>
    <textarea
      @input="updateValue"
      :placeholder="placeholder"
      id="common-textarea__field"
      class="common-textarea__field"
    ></textarea>
  </div>
</template>

<style scoped>
.common-textarea {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.common-textarea__label {
  margin-bottom: 6px;
  font-size: 15px;
}

.common-textarea__field {
  padding: 14px 0 14px 14px;
  height: 120px;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--white-color);
  border: 1px solid var(--dark-color);
  border-radius: var(--border-radius);
  outline: none;
  transition: 200ms ease-in-out;
  resize: none;
}

.common-textarea__field:focus {
  padding-left: 17px;
}

.common-textarea::placeholder {
  color: var(--grey-color);
}
</style>
