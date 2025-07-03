<template>
  <div class="modalOverlay">
    <div class="modalContent">
      <h2>Please log your mood</h2>
      <MoodSelector v-model="tempMood" :isModal="true" />
      <NoteInput class="modalNote" v-model="tempNote" />

      <div class="actionButtons">
        <button :disabled="!tempMood" @click="submit">Submit</button>
        <button @click="dismissReminder">Dismiss</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MoodSelector from './MoodSelector.vue'
import NoteInput from './NoteInput.vue'
import { useNotifications } from '../composables/useNotification'
const { createNotification } = useNotifications()

const emit = defineEmits<{
  (e: 'submit', payload: { mood: string; note: string }): void
  (e: 'dismiss'): void
}>()

const tempMood = ref<string | null>(null)
const tempNote = ref('')

function submit() {
  if (!tempMood.value) return
  emit('submit', { mood: tempMood.value, note: tempNote.value })
}

function dismissReminder() {
  createNotification('Got it. You will be asked to log your mood again in a moment!')
  emit('dismiss')
}
</script>

<style scoped>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(220, 38, 38, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalContent {
  background: #242424;
  padding: 2rem;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  text-align: center;
}
.actionButtons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 10px;
}
.modalNote {
  width: 65%;
  margin: 10px;
}
</style>
