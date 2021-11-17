<script setup>
import format from "date-fns/format";
import Header from "./Header.vue";
import OpenExit from "./OpenExit.vue";
import Products from "./Products.vue";
import { tooltips } from "../utils";
import { store } from "../store";

const props = defineProps({
  sessionId: String,
});

const emptyString = "";

let date;

// Получение времени входа
let timeOpen = emptyString;
let timeOpenShort = emptyString;

if (store.getters.sessionOpen(props.sessionId)) {
  const timestampOpen = store.getters.sessionOpen(props.sessionId).timestamp;

  timeOpen = format(new Date(timestampOpen * 1000), "HH:mm:ss");
  timeOpenShort = format(new Date(timestampOpen * 1000), "HH:mm");
  date = format(new Date(timestampOpen * 1000), "dd.MM.yyyy");
}
// Получение времени выхода
let timeExit = emptyString;
let timeExitShort = emptyString;

if (store.getters.sessionExit(props.sessionId)) {
  const timestampExit = store.getters.sessionExit(props.sessionId).timestamp;

  timeExit = format(new Date(timestampExit * 1000), "HH:mm:ss");
  timeExitShort = format(new Date(timestampExit * 1000), "HH:mm");
  date = format(new Date(timestampExit * 1000), "dd.MM.yyyy");
}
</script>

<template>
  <main class="main">
    <Header
      :date="date"
      :timeOpen="timeOpen"
      :timeOpenShort="timeOpenShort"
      :timeExit="timeExit"
      :timeExitShort="timeExitShort"
    />
    <OpenExit v-if="!timeOpen" :timeOpen="emptyString" name="Вход" />
    <OpenExit v-else :timeOpen="timeOpen" name="Вход" />
    <Products :sessionId="props.sessionId" />
    <OpenExit v-if="!timeExit" :timeExit="emptyString" name="Выход" />
    <OpenExit v-else :timeExit="timeExit" name="Выход" />

    <div class="buttons">
      <button class="button button_add" v-bind:title="tooltips.addProduct">
        Добавить продукт
      </button>
      <button class="button button_save" v-bind:title="tooltips.saveSession">
        Сохранить
      </button>
    </div>
  </main>
</template>





<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #ca29e4;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 0 10px 0;
}

.buttons {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
}

.button {
  height: 35px;
  border: none;
  border-radius: 15px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
}

.button_add {
  width: 40%;
  background: #eaf2fe;
  color: #307df7;
  margin: 0 0 0 15px;
}

.button_add:hover {
  box-shadow: 1px 1px 5px 2px #eaf2fe;
  text-shadow: 1px 1px 1px #307df770;
}

.button_save {
  width: 30%;
  background: #307df7;
  color: #ffffff;
  margin: 0 15px 0 0;
}

.button_save:hover {
  box-shadow: 1px 1px 5px 2px #307df770;
  text-shadow: 1px 1px 1px #ffffff99;
}

@media (max-width: 500px) {
  .button {
    height: 30px;
    font-size: 16px;
    line-height: 18px;
    border-radius: 10px;
  }

  .button_add {
    width: 50%;
    margin: 0 0 0 10px;
  }

  .button_save {
    margin: 0 10px 0 0;
  }
}
</style>
