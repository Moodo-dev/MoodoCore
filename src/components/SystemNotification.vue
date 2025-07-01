<template>
  <Transition name="fade">
    <div v-if="isVisible" :class="['notif', type]">
      {{ message }}
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { DefineProps, watch, ref } from 'vue'

const props = defineProps<{
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
}>()

const isVisible = ref(true)

watch(
  () => props.message,
  () => {
    isVisible.value = true
    setTimeout(() => {
      isVisible.value = false
    }, props.duration || 3000)
  },
  { immediate: true },
)
</script>

<style scoped></style>
