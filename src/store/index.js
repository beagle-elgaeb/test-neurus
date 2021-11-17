import { createStore } from "vuex";

import initialEvents from "./events.json";
import initialTrunstileEvents from "./trunstile-events.json";

export const store = createStore({
  state: {
    events: initialEvents,
    trunstileEvents: initialTrunstileEvents,
  },
  getters: {
    sessionIds: (state) => {
      return state.trunstileEvents.map((event) => {
        return event.sessionId;
      });
    },
    sessionOpen: (state) => (sessionId) => {
      return state.trunstileEvents.find((event) => {
        return event.type === "open" && event.sessionId === sessionId;
      });
    },
    sessionExit: (state) => (sessionId) => {
      return state.trunstileEvents.find((event) => {
        return event.type === "exit" && event.sessionId === sessionId;
      });
    },
    products: (state) => (sessionId) => {
      return state.events
        .filter((event) => {
          return event.sessionId === sessionId;
        })
        .map((event) => {
          return event.productName;
        });
    },
    productEvents: (state) => (sessionId, product, count) => {
      return state.events.filter((event) => {
        return event.sessionId === sessionId && event.productName === product;
      });
    },
  },
  mutations: {},
});
