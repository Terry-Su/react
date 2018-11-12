// ts-custom-tag start packages/react-dom/src/client/getActiveElement.js
function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
// ts-custom-tag end packages/react-dom/src/client/getActiveElement.js