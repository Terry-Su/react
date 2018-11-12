// ts-custom-tag start packages/react-reconciler/src/ReactCapturedValue.js


function createCapturedValue(value, source) {
  // If the value is an error, call this function immediately after it is thrown
  // so the stack is accurate.
  return {
    value: value,
    source: source,
    stack: getStackByFiberInDevAndProd(source)
  };
}
// ts-custom-tag end packages/react-reconciler/src/ReactCapturedValue.js