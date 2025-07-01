import { ref } from 'vue'

interface Notification {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}

const notifications = ref<Notification[]>([])

function createNotification(message: string, type: Notification['type'] = 'info', duration = 3000) {
  const id = Math.random().toString(36).substring(2, 8)
  notifications.value.push({ id, message, type })

  setTimeout(() => {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }, duration)
}

export function useNotifications() {
  return { notifications, createNotification }
}
