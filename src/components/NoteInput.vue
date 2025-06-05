<template>
    <textarea
      :value="modelValue"
      placeholder="Add a note (optional)"
      @input="$emit('update:modelValue', $event.target.value)"
      rows="4"
    />
  </template>
  
  <script lang="ts" setup>
    import { defineProps } from 'vue'
    
    const props = defineProps<{ modelValue: string }>()
  </script>
  
