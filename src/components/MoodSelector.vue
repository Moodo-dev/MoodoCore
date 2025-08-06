<template>
  <div class="moodSelector">
    <div class="currentMoodIndex">{{ moods[internalIndex] }}</div>

    <input
      type="range"
      min="0"
      :max="moods.length - 1"
      v-model="internalIndex"
      @input="updateMood"
      class="slider"
    />

    <!-- <button
      v-for="mood in moods"
      :key="mood"
      :class="[{ selected: mood === modelValue }, isModal ? 'modalButton' : null]"
      @click="$emit('update:modelValue', mood)"
    >
      {{ mood }}
    </button> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

// @ts-ignore
const props = defineProps<{ modelValue: string | null; isModal?: boolean }>()
const emit = defineEmits(['update: modelValue'])

const moods = ['😃', '😐', '😞', '😡', '😴'] //Probably change later?
const internalIndex = ref(props.modelValue ? moods.indexOf(props.modelValue) : 0)


// This watch for what ever reason doesn't catch the changes made with a slider.
// However, if we uncomment the buttons, suddenly its able to catch changes there.
//TODO: Look into whatever the fuck this is
watch(
  () => props.modelValue,
  (newVal) => {
    internalIndex.value = newVal ? moods.indexOf(newVal) : 0
  },
)

function updateMood() {
  emit('update: modelValue', moods[internalIndex.value])
}
</script>

<style scoped>
.moodSelector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider {
  width: 100%;
}

.currentMoodIndex {
  font-size: 2rem;
  margin-top: 0.5rem;
}

/* .moodSelector button {
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: #85b1dd;
  transition:
    background 0.3s,
    border-color 0.3s ease;
}

.modalButton {
  background-color: #242424 !important;
}

.moodSelector button.selected {
  border-color: #d823cf;
  background-color: #f13ce8;
  border-radius: 8px;
} */
</style>
