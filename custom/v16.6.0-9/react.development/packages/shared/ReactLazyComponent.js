// ts-custom-tag start packages/shared/ReactLazyComponent.js



var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}
// ts-custom-tag end packages/shared/ReactLazyComponent.js