<template>
  <button class="common-link-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.common-link-button {
  padding: 0;
  box-sizing: border-box;
  color: var(--dark-color);
  font-size: 14px;
  text-decoration: underline;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.6;
  transition: 150ms ease-in-out;
}

.common-link-button:hover {
  opacity: 1;
}
</style>
