// ts-custom-tag start packages/react-dom/src/events/SyntheticPointerEvent.js
/**
 * @interface PointerEvent
 * @see http://www.w3.org/TR/pointerevents/
 */
var SyntheticPointerEvent = SyntheticMouseEvent.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tangentialPressure: null,
  tiltX: null,
  tiltY: null,
  twist: null,
  pointerType: null,
  isPrimary: null
});


// ts-custom-tag end packages/react-dom/src/events/SyntheticPointerEvent.js