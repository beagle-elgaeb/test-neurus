import events from "./events.json";
import trunstileEvents from "./trunstile-events.json";

const sessionIdsInEvents = events.map((event) => {
  return event.sessionId;
});

const sessionIdsInTrunstileEvents = trunstileEvents.map((event) => {
  return event.sessionId;
});

const sessionIds = new Set(
  sessionIdsInEvents.concat(sessionIdsInTrunstileEvents)
);

export const initialSate = [...sessionIds].map((id) => {
  const openTimestamp = trunstileEvents.find((event) => {
    return event.type === "open" && event.sessionId === id;
  })?.timestamp;

  const exitTimestamp = trunstileEvents.find((event) => {
    return event.type === "exit" && event.sessionId === id;
  })?.timestamp;

  const productsInSessionId = events
    .filter((event) => {
      return event.sessionId === id;
    })
    .map((event) => {
      return event.productName;
    });

  const productNames = new Set(productsInSessionId);

  const products = [...productNames].map((name) => {
    const count = events
      .filter((event) => {
        return event.sessionId === id && event.productName === name;
      })
      .map((event) => {
        return event.productCount;
      })
      .reduce((count, eventCount) => count - eventCount, 0);

    return {
      name: name,
      count: count,
    };
  });

  return {
    sessionId: id,
    sessionOpen: openTimestamp,
    sessionExit: exitTimestamp,
    products: products,
    saved: false,
    openedProductsPopup: false,
  };
});
