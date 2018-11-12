// ts-custom-tag start packages/react-dom/src/shared/voidElementTags.js
// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);


// ts-custom-tag end packages/react-dom/src/shared/voidElementTags.js