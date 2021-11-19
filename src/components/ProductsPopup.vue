<script setup>
import { store } from "../store";
import ProductForAdd from "./ProductForAdd.vue";

const products = store.getters.products;

const props = defineProps({
  session: Object,
});
</script>

<template>
  <div
    :class="[
      props.session.openedProductsPopup ? 'overlay overlay_opened' : 'overlay',
    ]"
    v-on:click="
      store.commit('openClosePopupProductsPopup', {
        sessionId: props.session.sessionId,
      })
    "
  ></div>
  <div
    :class="[
      props.session.openedProductsPopup ? 'popup popup_opened' : 'popup',
    ]"
  >
    <button
      class="button_close"
      v-on:click="
        store.commit('openClosePopupProductsPopup', {
          sessionId: props.session.sessionId,
        })
      "
    ></button>
    <ProductForAdd
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      :sessionId="props.session.sessionId"
    />
  </div>
</template>

<style scoped>
.overlay {
  display: none;
}

.overlay_opened {
  height: 100vh;
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #00000070;
}

.popup {
  display: none;
}

.popup_opened {
  width: 95%;
  max-width: 700px;
  min-width: 280px;
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0;
  left: center;
  background: #ffffff;
  border-radius: 20px;
  margin: 50px 0 0 0;
  padding: 20px 0 20px 0;
}

.button_close {
  height: 30px;
  width: 30px;
  position: absolute;
  top: -40px;
  left: 0;
  background: transparent;
  background: url(../icons/close.svg);
  background-size: cover;
  background-position: center;
  border: none;
  outline: none;
}

@media (max-width: 500px) {
  .popup {
    margin: 45px 0 0 0;
  }

  .button_close {
    height: 25px;
    width: 25px;
    position: absolute;
    top: -35px;
  }
}
</style>