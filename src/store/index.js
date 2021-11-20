import { createStore } from "vuex";
import { initialSate } from "./initialState";

export const store = createStore({
  state: {
    initialSate: initialSate,
  },
  getters: {
    sessions: (state) => {
      return state.initialSate;
    },
    products: (state) => {
      return new Set(
        state.initialSate
          .map((session) => {
            return session.products.map((product) => {
              return product.name;
            });
          })
          .flat()
      );
    },
  },
  mutations: {
    increment(state, payload) {
      const currentProduct = getProduct(
        state,
        payload.sessionId,
        payload.product.name
      );

      currentProduct.count++;
    },

    decrement(state, payload) {
      const currentProduct = getProduct(
        state,
        payload.sessionId,
        payload.product.name
      );

      currentProduct.count--;
    },

    openClosePopupProductsPopup(state, payload) {
      const currentSession = getSession(state, payload.sessionId);
      const indexSession = state.initialSate.indexOf(currentSession);

      state.initialSate[indexSession].openedProductsPopup =
        !state.initialSate[indexSession].openedProductsPopup;
    },

    addProduct(state, payload) {
      const currentSession = getSession(state, payload.sessionId);
      const indexSession = state.initialSate.indexOf(currentSession);

      const currentProduct = getProduct(
        state,
        payload.sessionId,
        payload.product
      );

      if (!currentProduct) {
        state.initialSate[indexSession].products.push({
          name: payload.product,
          count: 1,
        });
      } else {
        currentProduct.count++;
      }
    },

    deleteProduct(state, payload) {
      const currentSession = getSession(state, payload.sessionId);
      const indexSession = state.initialSate.indexOf(currentSession);

      const currentProduct = getProduct(
        state,
        payload.sessionId,
        payload.product.name
      );
      const indexProduct =
        state.initialSate[indexSession].products.indexOf(currentProduct);

      state.initialSate[indexSession].products.splice(indexProduct, 1);
    },

    drugAndDropProduct(state, payload) {
      const startListId = payload.evt.dataTransfer.getData("sessionId");
      const startList = getSession(state, startListId);
      const stopList = getSession(state, payload.sessionId);

      const productIndex = payload.evt.dataTransfer.getData("productIndex");
      const [product] = startList.products.splice(productIndex, 1);

      const sameProduct = stopList.products.find(
        (item) => item.name === product.name
      );

      if (!sameProduct) {
        stopList.products.splice(-1, 0, product);
      } else {
        sameProduct.count = sameProduct.count + product.count;
      }
    },

    saveSession(state, payload) {
      const currentSession = getSession(state, payload.sessionId);
      const indexSession = state.initialSate.indexOf(currentSession);

      state.initialSate[indexSession].saved = true;
    },
  },
});

function getSession(state, sessionId) {
  return state.initialSate.find((session) => {
    return session.sessionId === sessionId;
  });
}

function getProduct(state, sessionId, productName) {
  return getSession(state, sessionId).products.find((product) => {
    return product.name === productName;
  });
}
