/* eslint-env node */

const fs = require( 'fs' );
const path = require( 'path' );

const potPath = path.resolve( __dirname, '../languages/vova-post-grids.pot' );
const contents = fs.readFileSync( potPath, 'utf8' );
const updatedContents = contents
	.replace( /^"POT-Creation-Date:.*\\n"\r?\n/m, '' )
	.replace( /\r\n/g, '\n' );

if ( updatedContents !== contents ) {
	fs.writeFileSync( potPath, updatedContents );
}
