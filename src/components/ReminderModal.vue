<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>Please log your mood</h2>
        <MoodSelector v-model="tempMood" />
        <NoteInput v-model="tempNote" />
  
        <button :disabled="!tempMood" @click="submit">Submit</button>
        <button @click="$emit('close')">Dismiss</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import MoodSelector from './MoodSelector.vue'
  import NoteInput from './NoteInput.vue'
  
  const tempMood = ref<string | null>(null)
  const tempNote = ref('')
  
  function submit() {
    if (!tempMood.value) return

    // @ts-ignore
    const submitEvent = new CustomEvent('submit', { detail: { mood: tempMood.value, note: tempNote.value } })
   
    // @ts-ignore
    emit('submit', { mood: tempMood.value, note: tempNote.value })
  }
  </script>
  
