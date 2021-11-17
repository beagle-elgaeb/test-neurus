<script setup>
import edit from "../icons/edit.svg";
import menu from "../icons/menu.svg";
import { tooltips } from "../utils";

const props = defineProps({
  date: String,
  timeOpen: String,
  timeExit: String,
});
</script>

<template>
  <div class="header">
    <div class="user_avatar"></div>
    <div class="id_and_text">
      <p class="id">{{ props.date }}</p>
      <p class="header_text">{{ props.timeOpen }} - {{ props.timeExit }}</p>
    </div>
    <div class="id_and_text">
      <p class="id">3723022</p>
      <p class="header_text">Карта ВВ</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fef6ff;
  border-start-end-radius: 20px;
  border-start-start-radius: 20px;
}

.user_avatar {
  height: 35px;
  width: 35px;
  background: #ca29e4;
  border-radius: 99em;
  margin: 0 0 0 15px;
}

.id_and_text {
  margin: 0 0 0 10%;
}

.id {
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  color: #808080;
  margin: 0;
}

.header_text {
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: #c0c0c0;
  margin: 0;
}

@media (max-width: 500px) {
  .user_avatar {
    height: 30px;
    width: 30px;
    margin: 0 0 0 10px;
  }

.id {
    font-size: 14px;
    line-height: 16px;
  }

  .header_text {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
