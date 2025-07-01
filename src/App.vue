<template>
  <div id="app">
    <header>
      <h1>Moodo</h1>
    </header>
    <main>
      <MoodLogger @notify="showNotification" />
    </main>

    <SystemNotification
      v-if="notification.isVisible"
      :type="notification.type"
      :message="notification.message"
      @close="notification.isVisible = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import MoodLogger from './components/MoodLogger.vue'
import SystemNotification from './components/SystemNotification.vue'

const notification = reactive({
  isVisible: false,
  message: '',
  type: 'info' as 'info' | 'success' | 'error',
})

function showNotification(message: string, type: 'info' | 'success' | 'error' = 'info') {
  notification.message = message
  notification.type = type
  notification.isVisible = true

  setTimeout(() => {
    notification.isVisible = false
  }, 4000)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  margin-top: 2rem;
}

header {
  margin-bottom: 2rem;
}

main {
  display: flex;
  justify-content: center;
}
</style>
