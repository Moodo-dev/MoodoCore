import { ref } from 'vue'
import { notifType, type INotification } from '../types/notification'

const notifications = ref<INotification[]>([])

function createNotification(message: string, type: notifType = notifType.info, duration = 3000) {
  const id = Math.random().toString(36).substring(2, 8)
  notifications.value.push({ id, message, type })

  setTimeout(() => {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }, duration)
}

export function useNotifications() {
  return { notifications, createNotification }
}
