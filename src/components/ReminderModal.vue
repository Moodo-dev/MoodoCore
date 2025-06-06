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

const emit = defineEmits<{
  (e: 'submit', payload: { mood: string; note: string }): void
  (e: 'close'): void
}>()

const tempMood = ref<string | null>(null)
const tempNote = ref('')

function submit() {
  console.log('Submit clicked')
  if (!tempMood.value) return
  emit('submit', { mood: tempMood.value, note: tempNote.value })
}
</script>
