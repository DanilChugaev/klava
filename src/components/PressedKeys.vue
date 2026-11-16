<template>
  <div class="pressed-keys">
    <p>Нажатая клавиша</p>

    <div>
      <code v-for="key in keys" :key="key" class="pressed-keys__key">
        {{ key }}
      </code>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  keys: string[];
}>();
</script>

<style scoped lang="postcss">
.pressed-keys {
  display: flex;
  flex-direction: column;
  min-height: 100px;

  &__key {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
}
</style>
