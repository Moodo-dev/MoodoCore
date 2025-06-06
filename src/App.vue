<template>
  <div id="app">
    <header>
      <h1>Moodo</h1>
    </header>
    <main>
      <MoodLogger />
    </main>
  </div>
</template>

<script lang="ts" setup>
import MoodLogger from './components/MoodLogger.vue'
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
