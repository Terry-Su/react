/* eslint-disable */

const PATH = require( 'path' )
const { default: build } = require( './util/splitALongFile' )
const FS = require( 'fs-extra' )
const rules = require( './rules' )
const insertedScript = require( './insertedScript' )

const input = PATH.resolve( __dirname, 'sourceFromBuild/react.development.js' )
const outputFoler = PATH.resolve( __dirname, 'build' )
const outputHtmlPath = PATH.resolve( outputFoler, 'test.html' )


const filteredRules = rules.filter( rule => rule.file.length > 0 )


function buildHtml( output ) {
  const scripts = filteredRules.map( rule => `<script src="/custom/build/${ rule.file }"></script>` ).join('\n')
  const babelScript = `<script src="/custom/util/babel.js"></script>`
  const mainScript = `<script type="text/babel">

  
  const data = [
    'ReactVersion',
    'objectAssign',
    'invariant',
    'lowPriorityWarning$1',
    'warningWithoutStack$1',
    'ReactNoopUpdateQueue',
  ].map( key => [ key, window[ key ] ] )

  data.

  console.table( data )

  // class App extends React.Component {
  //   render() {
  //     return <h1>
  //       Count: 0
  //     </h1>
  //   }
  // }
  // ReactDOM.render(
  //   <App />,
  //   document.getElementById('container')
  // );
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
    ${ insertedScript }
    ${ scripts }
  </head>
  <body>
    

    ${ mainScript }
  </body>
  </html>
`

    FS.outputFileSync( output, html )
}


build( input, outputFoler, filteredRules )
buildHtml( outputHtmlPath )




