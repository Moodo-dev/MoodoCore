<template>
  <textarea
    :value="modelValue"
    placeholder="Add a note (optional)"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    rows="4"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

// @ts-ignore
const props = defineProps<{ modelValue: string }>()
</script>

<style scoped>
textarea {
  /* width: 100%; */
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
}
</style>
