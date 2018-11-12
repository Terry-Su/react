// ts-custom-tag start packages/react-dom/src/events/EventListener.js
function addEventBubbleListener(element, eventType, listener) {
  element.addEventListener(eventType, listener, false);
}

function addEventCaptureListener(element, eventType, listener) {
  element.addEventListener(eventType, listener, true);
}
// ts-custom-tag end packages/react-dom/src/events/EventListener.js