<template>
  <Transition name="fade">
    <div v-if="isVisible" :class="['notif', type]">
      {{ message }}
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { watch, ref, nextTick } from 'vue'

const props = defineProps<{
  message?: string
  type?: 'success' | 'error' | 'info'
  duration?: number
}>()

const isVisible = ref(false)

watch(
  () => props.message,
  async () => {
    /*Really shitty fix to it instantly popping the notification up
     * but it works i guess
     * so i guess i shouldnt complain? */
    await nextTick()
    isVisible.value = true
    setTimeout(() => {
      isVisible.value = false
    }, props.duration || 3000)
  },
  { immediate: true },
)
</script>

<style scoped>
.notif {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.success {
  background-color: #4caf50;
}

.error {
  background-color: #f44336;
}

.info {
  background-color: #2196f3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
