const { OUTPUT_FOLDER } = require( './constants' ) 
const browserSync= require('browser-sync')
const path = require('path')


browserSync.init( {
  server: OUTPUT_FOLDER,
  open  : false,
  serveStatic: [
    path.resolve( __dirname, '../build/dist' )
  ]
} )

require('./buildTestData')