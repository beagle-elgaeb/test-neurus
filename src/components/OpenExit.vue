<script setup>
import sessions from "../icons/sessions.svg";
import { tooltips } from "../utils";

const props = defineProps({
  timeOpen: String,
  timeExit: String,
  name: String,
  saved: Boolean,
});
</script>

<template>
  <div class="open_session">
    <div class="text">
      <p class="open_or_exit">{{ name }}</p>
      <p class="time" v-if="name === 'Вход'">{{ timeOpen }}</p>
      <p class="time" v-else>{{ timeExit }}</p>
    </div>
  </div>
</template>

<style scoped>
.open_session {
  height: 35px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 15px;
}

.open_or_exit {
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: #cc464d;
  margin: 0;
}

.time {
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  margin: 0 0 0 5px;
}

.button {
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 17.5px 0 0;
  padding: 0;
}
.button_saved {
  display: none;
}

.button_img {
  height: 20px;
  width: 20px;
  margin: auto;
}

@media (max-width: 500px) {
  .text {
    margin: 0 0 0 10px;
  }

  .open_or_exit {
    font-size: 16px;
    line-height: 18px;
    color: #cc464d;
    margin: 0;
  }

  .time {
    font-size: 16px;
    line-height: 18px;
  }

  .button {
    height: 25px;
    width: 25px;
    margin: 0 12.5px 0 0;
  }

  .button_img {
    height: 18px;
    width: 18px;
  }
}
</style>