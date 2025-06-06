<template>
  <div class="moodSelector">
    <button
      v-for="mood in moods"
      :key="mood"
      :class="{ selected: mood === modelValue }"
      @click="$emit('update:modelValue', mood)"
    >
      {{ mood }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{ modelValue: string | null }>()

const moods = ['😃', '😐', '😞', '😡', '😴'] //Probably change later?
// TODO: find out a way to make it a slider? 👀
</script>

<style scoped>
.moodSelector button {
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: #242424; /*TODO: find a way to not use a certain color*/
  border: 2px solid transparent;
  cursor: pointer;

  transition:
    background 0.3s,
    border-color 0.3s ease;
}

.moodSelector button.selected {
  border-color: #975294;
  background-color: #8b2f87;
  border-radius: 8px;
}
</style>
