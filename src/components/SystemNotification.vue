<template>
  <TransitionGroup name="fade" tag="div" class="notifContainer">
    <div v-for="notif in notifications" :key="notif.id" :class="['notif', notif.type]">
      {{ notif.message }}
    </div>
  </TransitionGroup>
</template>

<script lang="ts" setup>
//@ts-ignore just ignore the import errors for now
import { watch, ref, nextTick } from 'vue'

interface Notification {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}

// const props = defineProps<{
//   message?: string
//   type?: 'success' | 'error' | 'info'
//   duration?: number
// }>()

const notifications = ref<Notification[]>([])

function createNotification(message: string, type: Notification['type'] = 'info') {
  const id = Math.random().toString(36).substring(2, 8)
  notifications.value.push({ id, message, type })

  setTimeout(() => {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }, 3000)
}

// const isVisible = ref(false)

// watch(
//   () => props.message,
//   async () => {
//     /*Really shitty fix to it instantly popping the notification up
//      * but it works i guess
//      * so i guess i shouldnt complain? */
//     await nextTick()
//     isVisible.value = true
//     setTimeout(() => {
//       isVisible.value = false
//     }, props.duration || 3000)
//   },
//   { immediate: true },
// )
</script>

<style scoped>
.notif {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
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

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
