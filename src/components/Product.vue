<script setup>
import sessions from "../icons/sessions.svg";
import trash from "../icons/trash.svg";
import { tooltips } from "../utils";
import { store } from "../store";

const props = defineProps({
  product: Object,
  sessionId: String,
  saved: Boolean,
});

function increment() {
  store.commit("increment", {
    sessionId: props.sessionId,
    product: props.product,
  });
}

function decrement() {
  store.commit("decrement", {
    sessionId: props.sessionId,
    product: props.product,
  });
}

function deleteProduct() {
  store.commit("deleteProduct", {
    sessionId: props.sessionId,
    product: props.product,
  });
}
</script>

<template>
  <div class="product">
    <p class="product_name">{{ props.product.name }}</p>
    <div class="count_and_buttons">
      <button
        :class="[props.saved ? 'button_saved' : 'button button_delete']"
        type="button"
        v-on:click="deleteProduct"
        v-bind:title="tooltips.deleteProduct"
      >
        <img class="button_img" :src="trash" />
      </button>
      <button
        :class="[props.saved ? 'button_saved' : 'button button_change_count']"
        v-on:click="decrement"
      >
        –
      </button>
      <p
        :class="[
          props.saved ? 'product_count product_count_saved' : 'product_count',
        ]"
      >
        {{ props.product.count }}
      </p>
      <button
        :class="[props.saved ? 'button_saved' : 'button button_change_count']"
        v-on:click="increment"
      >
        +
      </button>
      <button
      class="drag_handle"
        :class="[props.saved ? 'button_saved' : 'button button_change_session']"
        v-bind:title="tooltips.changeSession"
      >
        <img class="button_img" :src="sessions" />
      </button>
    </div>
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

.product_name {
  font-size: 16px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 0 15px;
}

.count_and_buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px 0 0;
}

.product_count {
  width: 50px;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
}

.product_count_saved {
  width: 40px;
  font-weight: 600;
}

.button {
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
}

.button_saved {
  display: none;
}

.button_delete {
  margin: 0 10px 0 0;
}

.button_change_count {
  font-size: 22px;
  line-height: 24px;
  font-weight: 600;
  color: #307df7;
  margin: 0;
}

.button_change_session {
  margin: 0 2.5px 0 10px;
}

.button_img {
  height: 20px;
  width: 20px;
  margin: auto;
}

@media (max-width: 500px) {
  .product_name {
    font-size: 14px;
    line-height: 16px;
    margin: 0 0 0 10px;
  }

  .count_and_buttons {
    margin: 0 10px 0 0;
  }

  .product_count {
    width: 30px;
    font-size: 14px;
    line-height: 16px;
  }

  .button {
    height: 25px;
    width: 25px;
  }

  .button_delete {
    margin: 0 6px 0 0;
  }

  .button_change_count {
    font-size: 18px;
    line-height: 20px;
  }

  .button_change_session {
    margin: 0 2.5px 0 6px;
  }

  .button_img {
    height: 18px;
    width: 18px;
  }
}
</style>
