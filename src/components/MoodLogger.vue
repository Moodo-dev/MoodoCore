<template>
  <ReminderModal v-if="showReminder" @close="showReminder = false" @submit="handleSubmit" />

  <div v-else class="mood-logger">
    <MoodSelector v-model="selectedMood" />
    <NoteInput v-model="note" />

    <button :disabled="!selectedMood" @click="handleSubmit">Log Mood</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MoodSelector from './MoodSelector.vue'
import NoteInput from './NoteInput.vue'
import ReminderModal from './ReminderModal.vue'

const selectedMood = ref<string | null>(null)
const note = ref('')
const showReminder = ref(false)

setTimeout(() => {
  showReminder.value = true
}, 5000)

function handleSubmit() {
  if (!selectedMood.value) return

  console.log('Mood logged:', selectedMood.value, 'Note:', note.value)
  selectedMood.value = null
  note.value = ''
showReminder.value = false
}
</script>

<style scoped>
.mood-logger {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
}
</style>
