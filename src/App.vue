<template>
  <div id="app">
    <header>
      <h1>Moodo</h1>
    </header>
    <main>
      <MoodLogger />
    </main>

    <SystemNotification />
  </div>
</template>

<script lang="ts" setup>
import MoodLogger from './components/MoodLogger.vue'
import SystemNotification from './components/SystemNotification.vue'
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
