<template>
  <div class="keyboard">
    <div v-for="(line, i) in keyboardRu" :key="line[i]" class="keyboard__line">
      <Key
        v-for="key in line"
        :key
        :class="[
          'keyboard__key',
          {
            'keyboard__key--flex': upperKeys.includes(key),
          },
        ]"
        :correct="keys.includes(key)"
      >
        {{ key }}
      </Key>
    </div>
  </div>
</template>

<script setup lang="ts">
import Key from './Key.vue';

defineProps<{
  keys: string[];
}>();

const keyboardEn = [
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'backspace',
    'pageup',
  ],
  [
    'tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'pagedown',
  ],
  [
    'capslock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    "''",
    'enter',
    'home',
  ],
  ['shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
  [
    'control',
    'alt',
    'meta',
    'space',
    'meta',
    'alt',
    'arrowleft',
    'arrowup',
    'arrowdown',
    'arrowright',
  ],
];
const keyboardRu = [
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'backspace',
    'pageup',
  ],
  [
    'tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    'enter',
    'pagedown',
  ],
  [
    'capslock',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'ё',
    'home',
  ],
  ['shift', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'shift'],
  [
    'control',
    'alt',
    'meta',
    'space',
    'meta',
    'alt',
    'arrowleft',
    'arrowup',
    'arrowdown',
    'arrowright',
  ],
];
const upperKeys = ['tab', 'capslock', 'shift', 'backspace', 'enter', 'space'];
</script>

<style scoped lang="postcss">
.keyboard {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__line {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__key {
    text-transform: uppercase;

    &--flex {
      flex: 1;
    }
  }
}
</style>
