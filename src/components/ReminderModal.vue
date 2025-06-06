<template>
  <div class="modalOverlay">
    <div class="modalContent">
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

<style scoped>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalContent {
  background: #eee;
  padding: 2rem;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  text-align: center;
}
</style>
