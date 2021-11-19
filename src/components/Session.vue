<script setup>
import format from "date-fns/format";
import { tooltips } from "../utils";
import Header from "./Header.vue";
import OpenExit from "./OpenExit.vue";
import Products from "./Products.vue";
import ProductsPopup from "./ProductsPopup.vue";
import { store } from "../store";

const props = defineProps({
  session: Object,
});

const nullString = "_";

let date;

// ---------------------------------------------------- Получение времени входа
let timeOpen = nullString;
let timeOpenShort = nullString;

if (props.session.sessionOpen) {
  const timestampOpen = props.session.sessionOpen;

  timeOpen = format(new Date(timestampOpen * 1000), "HH:mm:ss");
  date = format(new Date(timestampOpen * 1000), "dd.MM.yyyy");
}

// --------------------------------------------------- Получение времени выхода
let timeExit = nullString;
let timeExitShort = nullString;

if (props.session.sessionExit) {
  const timestampExit = props.session.sessionExit;

  timeExit = format(new Date(timestampExit * 1000), "HH:mm:ss");
  date = format(new Date(timestampExit * 1000), "dd.MM.yyyy");
}
</script>

<template>
  <main
    class="main"
    :class="[props.session.saved ? 'main_saved' : 'main_unsaved']"
  >
    <Header
      :date="date"
      :timeOpen="timeOpen"
      :timeExit="timeExit"
      :saved="props.session.saved"
    />
    <OpenExit :timeOpen="timeOpen" name="Вход" :saved="props.session.saved" />
    <Products
      :products="props.session.products"
      :sessionId="props.session.sessionId"
      :saved="props.session.saved"
    />
    <OpenExit :timeExit="timeExit" name="Выход" :saved="props.session.saved" />

    <div :class="[props.session.saved ? 'buttons_saved' : 'buttons']">
      <button
        class="button button_add"
        v-on:click="
          store.commit('openClosePopupProductsPopup', {
            sessionId: props.session.sessionId,
          })
        "
        v-bind:title="tooltips.addProduct"
      >
        Добавить продукт
      </button>
      <button
        class="button button_save"
        v-on:click="
          store.commit('saveSession', {
            sessionId: props.session.sessionId,
          })
        "
        v-bind:title="tooltips.saveSession"
      >
        Сохранить
      </button>
    </div>
  </main>
  <ProductsPopup :session="props.session" />
</template>

<style scoped>
.main {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 0 20px 0;
}

.main_saved {
  border-left: 5px solid #307df7;
  border-bottom: 2px solid #307df7;
}

.main_unsaved {
  border: 2px solid #ca29e4;
}

.buttons {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #c0c0c0;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
}

.buttons_saved {
  display: none;
}

.button {
  height: 35px;
  border: none;
  border-radius: 15px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
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

@media (max-width: 350px) {
  .button {
    font-size: 14px;
    line-height: 16px;
  }

  .button_add {
    width: 55%;
  }

  .button_save {
    width: 33%;
  }
}
</style>
