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
</script>
