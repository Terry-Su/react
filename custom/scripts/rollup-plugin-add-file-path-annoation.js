/* eslint-disable */

const PATH = require( 'path' )


module.exports = function addFilePathAnnotation ( {
  root
} ) {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    transform( source, id ) {
      let name =  root == null ? PATH.basename( id ) : PATH.relative( root, id )

// ts-custom-tag start ../ commonjs-proxy:/Users/suxing/Documents/TheWorkingDocuments/Project/react/packages/react/src/React.js

      const REGEXP = /commonjs\-proxy\:/
      const isCommonJsProxyPath = path => REGEXP.test( path )
      if ( isCommonJsProxyPath( id ) ) {
        id = id.replace( REGEXP, '/' )
        name = id.replace( `${root}`, '' )
      }

      return `// ts-custom-tag start ${ name }
${ source }
// ts-custom-tag end ${ name }`
    },
  }
}
