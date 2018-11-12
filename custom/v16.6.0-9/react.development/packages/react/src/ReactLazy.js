// ts-custom-tag start packages/react/src/ReactLazy.js


function lazy(ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };
}
// ts-custom-tag end packages/react/src/ReactLazy.js