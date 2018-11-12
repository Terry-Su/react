// ts-custom-tag start packages/react/src/ReactCurrentOwner.js


/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null,
  currentDispatcher: null
};


// ts-custom-tag end packages/react/src/ReactCurrentOwner.js