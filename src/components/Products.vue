<script setup>
import Product from "./Product.vue";
import { store } from "../store";

const props = defineProps({
  products: Object,
  sessionId: String,
  saved: Boolean,
});

function startDrag(evt, index) {
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("productIndex", index);
  evt.dataTransfer.setData("sessionId", props.sessionId);
}
</script>

<template>
  <div
    :class="[
      props.products.filter((product) => product.count > 0).length === 0
        ? 'products products_zero'
        : 'products',
    ]"
    v-on:drop="
      store.commit('drugAndDropProduct', {
        evt: $event,
        sessionId: props.sessionId,
      })
    "
    @dragover.prevent
    @dragenter.prevent
  >
    <div v-for="(product, index) in props.products" :key="index">
      <Product
        v-if="product.count > 0"
        :product="product"
        :sessionId="props.sessionId"
        :saved="props.saved"
        @dragstart="startDrag($event, index)"
        draggable="true"
      />
    </div>
  </div>
</template>

<style scoped>
.products {
  height: fit-content;
  width: 100%;
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
}

.products_zero {
  height: 20px;
  background: #c0c0c020;
}
</style>





