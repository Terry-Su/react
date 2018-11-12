// ts-custom-tag start packages/events/TopLevelEventTypes.js


// Do not uses the below two methods directly!
// Instead use constants exported from DOMTopLevelEventTypes in ReactDOM.
// (It is the only module that is allowed to access these methods.)

function unsafeCastStringToDOMTopLevelType(topLevelType) {
  return topLevelType;
}

function unsafeCastDOMTopLevelTypeToString(topLevelType) {
  return topLevelType;
}
// ts-custom-tag end packages/events/TopLevelEventTypes.js