<script>
import format from "date-fns/format";
import trunstileEvents from "../store/trunstile-events.json";
import edit from "../icons/edit.svg";
import menu from "../icons/menu.svg";

const firstID = trunstileEvents[0].id;

const timestampOpen = trunstileEvents[0].timestamp;
const timeOpen = format(new Date(timestampOpen), "HH:mm:ss");

const firstSessonID = trunstileEvents[0].sessionId;



const timestampClose = trunstileEvents.timestamp;
const timeClose = format(new Date(timestampClose), "HH:mm:ss");

const Header = {
  data() {
    return {
      sessionId: firstID,
      sessionOpenTime: timeOpen,
      sessionCloseTime: timeClose,
    };
  },
};

export default Header;
</script>

<template>
  <header class="header">
    <div class="user_avatar"></div>
    <div class="id_and_text">
      <p class="id">{{ session }}</p>
      <p class="header_text">{{ sessionOpenTime }} - 14:40:17</p>
    </div>
    <div class="id_and_text">
      <p class="id">1234567</p>
      <p class="header_text">Номер карты ВВ</p>
    </div>
    <div class="buttons">
      <button class="button" type="button">
        <img class="button_img" :src="edit" />
      </button>
      <button class="button" type="button">
        <img class="button_img" :src="menu" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fef6ff;
  border-start-start-radius: 20px;
  border-start-end-radius: 20px;
}

.user_avatar {
  height: 35px;
  width: 35px;
  background: #ca29e4;
  border-radius: 99em;
  margin: 0 0 0 15px;
}

.id {
  font-size: 16px;
  line-height: 18px;
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

.button {
  height: 35px;
  width: 35px;
  background: transparent;
  border: none;
  outline: none;
  margin: 0 15px 0 0;
  padding: 0;
}

.button_img {
  height: 20px;
  width: 20px;
  margin: auto;
}
</style>
