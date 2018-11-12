// ts-custom-tag start packages/react-dom/src/events/SyntheticAnimationEvent.js
/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */
var SyntheticAnimationEvent = SyntheticEvent.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
});


// ts-custom-tag end packages/react-dom/src/events/SyntheticAnimationEvent.js