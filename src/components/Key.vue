<template>
  <div
    :class="[
      'key',
      {
        'key--correct': correct === true,
        'key--wrong': wrong === true,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  correct?: boolean;
  wrong?: boolean;
}>();
</script>

<style scoped lang="postcss">
.key {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 60px;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 20px;

  &--correct {
    background-color: var(--color-correct);
  }
  &--error {
    border: 1px solid var(--color-wrong);
  }
}
</style>
