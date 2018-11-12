// ts-custom-tag start packages/react-dom/src/events/SyntheticTouchEvent.js
/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var SyntheticTouchEvent = SyntheticUIEvent.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: getEventModifierState
});


// ts-custom-tag end packages/react-dom/src/events/SyntheticTouchEvent.js