<script setup>
import Product from "./Product.vue";
import { store } from "../store";

const props = defineProps({
  sessionId: String,
});

const products = new Set(store.getters.products(props.sessionId));
</script>

<template>
  <div class="products">
    <Product
      v-for="(product, index) in products"
      :key="index"
      :sessionId="props.sessionId"
      :product="product"
    />
  </div>
</template>

<style scoped>
.products {
  width: 100%;
}
</style>
