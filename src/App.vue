<template>
  <h1 style="margin-bottom: auto">Klava - тренажер клавиатуры</h1>

  <Keyboard :keys />

  <PressedKeys :keys />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMagicKeys } from '@vueuse/core';
// import { STORAGE_LEVEL_KEY } from './constants';
import PressedKeys from './components/PressedKeys.vue';
import Keyboard from './components/Keyboard.vue';

const { current } = useMagicKeys();
const keys = computed(() => Array.from(current));

// const currentLevel = useStorage<number>(STORAGE_LEVEL_KEY, 0);
</script>

<style lang="postcss"></style>
