<script setup>
import Session from "./components/Session.vue";
import { store } from "./store";

// Отбираем уникальные сессии из событий турникетов
const sessionIds = new Set(store.getters.sessionIds);
</script>

<template>
  <Session
    v-for="(sessionId, index) in sessionIds"
    :key="index"
    :sessionId="sessionId"
  />
</template>

<style>
#app {
  width: 95%;
  max-width: 700px;
  min-width: 280px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2.5% auto 0;
}
</style>



