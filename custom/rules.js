/* eslint-disable */

// Template
// {
//   file: ``,
//   start  : 
// ``,
//   end : 
// ``
// },

module.exports = [
  {
    file  : 'ReactVersion.js',
    start : `// TODO: this is special because it gets imported during build.`,
    end   : `var ReactVersion = '16.6.0';`,
  },

  {
    file: `ReactSymbols.js`,
    start  : `// The Symbol used to tag the ReactElement-like types. If there is no native Symbol`,
    end : 
`function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}`
  },
  
  {
    file: `invariant.js`,
    start  : 
`
/**
 * Use invariant() to assert state which your program assumes to be true.
`,
    end : 
`error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}`
  },

  {
    file: `lowPriorityWarning.js`,
    start  : 
`
/**
 * Forked from fbjs/warning:
`,
  end : 
`var lowPriorityWarning$1 = lowPriorityWarning;`
},

{
  file: `warningWithoutStack`,
  start  : 
`
/**
 * Similar to invariant but only logs a warning if the condition is not met.`,
  end : 
`var warningWithoutStack$1 = warningWithoutStack;`
},

{
  file: `ReactNoopUpdateQueue.js`,
  start  : 
`var didWarnStateUpdateForUnmountedComponent = {};`,
  end : 
`enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};`
},

{
  file: ``,
  start  : 
``,
  end : 
``
},

{
  file: ``,
  start  : 
``,
  end : 
``
},
  
  
]