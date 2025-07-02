<template>
  <TransitionGroup name="fade" tag="div" class="notifContainer">
    <div
      v-for="notif in notifications"
      :key="notif.id"
      :class="['notif', getNotifType(notif.type)]"
    >
      {{ notif.message }}
    </div>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { useNotifications } from '../composables/useNotification'
import { notifType } from '../types/notification'

const { notifications } = useNotifications()

const getNotifType = (type: number) => notifType[type]
</script>

<style scoped>
.notifContainer {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  z-index: 1000;
}

.notif {
  padding: 1rem 2rem;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: auto;
  max-width: 320px;
  word-break: break-word;
  overflow-wrap: anywhere;
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

.fade-move {
  transition: transform 0.3s ease;
}
</style>
