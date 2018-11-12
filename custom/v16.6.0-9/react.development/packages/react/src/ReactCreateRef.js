// ts-custom-tag start packages/react/src/ReactCreateRef.js


// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}
// ts-custom-tag end packages/react/src/ReactCreateRef.js