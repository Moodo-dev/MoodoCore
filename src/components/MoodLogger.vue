<template>
  <ReminderModal v-if="showReminder" @close="showReminder = false" @submit="handleSubmitModal" />

  <div v-else class="moodLogger">
    <MoodSelector v-model="selectedMood" :isModal="false" />
    <NoteInput v-model="note" />

    <button :disabled="!selectedMood" @click="handleSubmitClicked">Log Mood</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useNotifications } from '../composables/useNotification'
import MoodSelector from './MoodSelector.vue'
import NoteInput from './NoteInput.vue'
import ReminderModal from './ReminderModal.vue'
import axios from 'axios'

const { createNotification } = useNotifications()

const BASE_MOOD_URL = 'http://localhost:5001/api/moods/'
const selectedMood = ref<string | null>(null)
const note = ref('')
const showReminder = ref(false)

const emit = defineEmits<{
  (e: 'notify', message: string, type: 'success' | 'error' | 'info'): void
}>()

const ping = new Audio('/ping.wav')
ping.load()

setTimeout(() => {
  createNotification('Time for a quick mood check-in!')
  showReminder.value = true
}, 5000)

watch(showReminder, (newVal) => {
  if (newVal) {
    ping.play().catch((err) => {
      console.error('Playback failed:', err)
      createNotification(`An error occured (${err.message})`, 'error')
    })
  }
})

async function handleSubmitModal(payload: { mood: string; note: string }) {
  if (!payload.mood) return

  if (!payload.note) {
    await axios
      .post(`${BASE_MOOD_URL}`, { mood: payload.mood })
      .then(() => emit('notify', 'Mood logged successfully!', 'success'))
      .catch(function (error) {
        console.log(error)
        emit('notify', `An error occured while logging your mood! (${error.message})`, 'error')
      })
  } else {
    await axios
      .post(`${BASE_MOOD_URL}`, { mood: payload.mood, note: payload.note })
      .then(() => emit('notify', 'Mood logged successfully!', 'success'))
      .catch(function (error) {
        console.log(error)
        emit('notify', `An error occured while logging your mood! (${error.message})`, 'error')
      })
  }
  console.log('Mood logged from modal:', payload.mood, 'Note:', payload.note)

  selectedMood.value = null
  note.value = ''
  showReminder.value = false
}

async function handleSubmitClicked() {
  if (!selectedMood.value) return

  if (!note.value) {
    await axios
      .post(`${BASE_MOOD_URL}`, { mood: selectedMood.value })
      .then(() => emit('notify', 'Mood logged successfully!', 'success'))
      .catch(function (error) {
        console.log(error)
        emit('notify', `An error occured while logging your mood! (${error.message})`, 'error')
      })
  } else {
    await axios
      .post(`${BASE_MOOD_URL}`, { mood: selectedMood.value, note: note.value })
      .then(() => emit('notify', 'Mood logged successfully!', 'success'))
      .catch(function (error) {
        console.log(error)
        emit('notify', `An error occured while logging your mood! (${error.message})`, 'error')
      })
  }

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
