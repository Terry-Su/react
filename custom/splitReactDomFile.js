/* eslint-disable */

const PATH = require( 'path' )
const FS = require( 'fs-extra' )

let isTestAll 
let isOnlyTestReact
let isOnlyTestReactDOM

const OUTPUT_FOLDER_NAME = 
  'build'
const mode = 3

switch( mode ) {
  case 1:
    isTestAll = true
    break
  case 2:
    isOnlyTestReact = true
    isOnlyTestReactDOM = false
    break
  case 3:
    isOnlyTestReact = false
    isOnlyTestReactDOM = true
    break
}




const TAG = `ts-custom-tag`
const START_TAG = `\/\/ ${ TAG } start`
const END_TAG = `\/\/ ${ TAG } end`

function isStartLine( line ) {
  return new RegExp( START_TAG ).test( line )
}

function isEndLine( line ) {
  return new RegExp( END_TAG ).test( line )
}

function getFileOnEndLine( line ) {
  const isSpecialFormat = /\/\/.+\/\//.test( line )

  if ( isSpecialFormat ) {
    const path = line.replace( /\/\/.+\/\//, '' )
    return `commonjs-proxy/${ path }`
  }

  return line.replace( `${ END_TAG } `, '' )
}

function getFilesData( source, folderName ) {
  const lines = source.split( '\n' )
  let filesData = []
  let transportingContainer = []
  let started = false
  // Used to resolve the content between end and start
  let isBetweenEndAndStart = false

  function resolveLine( line, index ) {
    if ( isStartLine( line ) ) {
      started = true
    }

    if ( started ) {
      if ( isStartLine( line ) ) {
        // Resolve the content between end and start
        if ( isBetweenEndAndStart  ) {
          const text = transportingContainer.join( `\n` )
          if ( text !== '' ) {
            const file = `${folderName}/unknown/line-number-${ index }.js`
            filesData.push( { file, text } )
          }
        }

        isBetweenEndAndStart = false

        transportingContainer = []
      }

      transportingContainer.push( line )

      if ( isEndLine( line ) ) {
        const text = transportingContainer.join( `\n` )
        const file = `${ folderName }/${getFileOnEndLine( line )}`
        filesData.push( { file, text } )
        transportingContainer = []
        isBetweenEndAndStart = true
      }
      
    }
   
  }

  lines.forEach( resolveLine )

  return filesData
}

function buildFiles( filesData ) {
  function outputFile( { file, text } ) {
    file = PATH.normalize( file )
    const path = PATH.resolve( buildFoler, file )
    try {
      FS.outputFileSync( path, text )
    } catch (e) {
      throw e
      debugger
    }
  }

  filesData.forEach( outputFile )
}

function buildHtml( outputHtmlPath, filesData,  ) {
  const scripts = filesData.map( ( { file } ) => `<script src="/custom/${ OUTPUT_FOLDER_NAME }/${ file }"></script>` ).join('\n')
  const babelScript = `<script src="/custom/util/babel.js"></script>`
  const mainScript = `<script type="text/babel">
  // const data = [
  //   'ReactVersion',
  //   'objectAssign',
  //   'invariant',
  //   'lowPriorityWarning$1',
  //   'warningWithoutStack$1',
  //   'ReactNoopUpdateQueue',
  // ].map( key => [ key, window[ key ] ] )


  // console.table( data )

  class App extends React.Component {
    render() {
      return <h1>
        Count: 1
      </h1>
    }
  }
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  );
</script>`

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    ${ babelScript }
    ${ ! isTestAll && isOnlyTestReactDOM ? `<script src="../../../build/dist/react.development.js"></script>` : '' }
    ${ scripts }
    ${ ! isTestAll && isOnlyTestReact ? `<script src="../../../build/dist/react-dom.development.js"></script>` : '' }

  </head>
  <body>
    <div id="container"></div>
    ${ mainScript }
  </body>
  </html>`

  FS.outputFileSync( outputHtmlPath, html )
}

function implement( {
  inputs,
  outputHtmlPath,
  buildFoler,
} ) {

  let allFilesData = []

  function resolveInput( input ) {
    if ( input ) {
      const source = FS.readFileSync( input, { encoding: 'utf8' } )
      const folderName = PATH.basename( input, '.js' )
      const filesData = getFilesData( source, folderName )    
      allFilesData = allFilesData.concat( filesData )
    }
  }

  inputs.forEach( resolveInput )

  buildFiles( allFilesData )
  buildHtml( outputHtmlPath, allFilesData )
  
}



const buildFoler = PATH.resolve( __dirname, OUTPUT_FOLDER_NAME )



implement( {
  inputs: [
    isTestAll || isOnlyTestReact ? PATH.resolve( __dirname, '../build/dist/react.development.js' ) : null,
    isTestAll || isOnlyTestReactDOM ? PATH.resolve( __dirname, '../build/dist/react-dom.development.js' ) : null,
  ],
  buildFoler,
  outputHtmlPath: PATH.resolve( buildFoler, 'test.html' ),
} )



