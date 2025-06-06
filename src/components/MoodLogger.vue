<template>
  <ReminderModal v-if="showReminder" @close="showReminder = false" @submit="handleSubmitModal" />

  <div v-else class="moodLogger">
    <MoodSelector v-model="selectedMood" />
    <NoteInput v-model="note" />

    <button :disabled="!selectedMood" @click="handleSubmitClicked">Log Mood</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import MoodSelector from './MoodSelector.vue'
import NoteInput from './NoteInput.vue'
import ReminderModal from './ReminderModal.vue'

const selectedMood = ref<string | null>(null)
const note = ref('')
const showReminder = ref(false)

const ping = new Audio('/ping.wav')
ping.load()

setTimeout(() => {
  showReminder.value = true
}, 5000)

watch(showReminder, (newVal) => {
  if (newVal) {
    ping.play().catch((err) => {
      console.error('Playback failed:', err)
    })
  }
})

function handleSubmitModal(payload: { mood: string; note: string }) {
  if (!payload.mood) return

  console.log('Mood logged from modal:', payload.mood, 'Note:', payload.note)

  selectedMood.value = null
  note.value = ''
  showReminder.value = false
}

function handleSubmitClicked() {
  if (!selectedMood.value) return

  console.log('Mood logged from free will:', selectedMood.value, 'Note:', note.value)
  selectedMood.value = null
  note.value = ''
}
</script>

<style scoped>
.moodLogger {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
}
</style>
