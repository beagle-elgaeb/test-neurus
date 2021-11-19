<script setup>
import { store } from "../store";

const props = defineProps({
  sessionId: String,
  product: String,
});

function addProduct() {
  store.commit("addProduct", {
    sessionId: props.sessionId,
    product: props.product,
  });

  store.commit("openClosePopupProductsPopup", {
            sessionId: props.sessionId,
          });
}
</script>

<template>
  <div class="product">
    <button class="button_add" v-on:click="addProduct">
      {{ props.product }}
    </button>
  </div>
</template>

<style scoped>
.product {
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button_add {
  height: 80%;
  width: calc(100% - 2 * 15px);
  background: #eaf2fe;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 18px;
  text-align: start;
  color: #307df7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  margin: 0 0 0 15px;
}

.button_add:hover {
  box-shadow: 1px 2px 3px 1px #307df770;
}

@media (max-width: 500px) {
  .button_add {
    width: calc(100% - 2 * 10px);
    font-size: 14px;
    line-height: 16px;
    margin: 0 0 0 10px;
  }
}
</style>
