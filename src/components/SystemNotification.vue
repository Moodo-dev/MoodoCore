<template>
  <TransitionGroup name="fade" tag="div" class="notifContainer">
    <div v-for="notif in notifications" :key="notif.id" :class="['notif', notif.type]">
      {{ notif.message }}
    </div>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { useNotifications } from '../composables/useNotification'

const { notifications } = useNotifications()
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
