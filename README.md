# hyphenation-poc
Proof of concept for client-side-hyphenation using the hypher node module

This uses the [hypher node module by Bramstein](https://github.com/bramstein/hypher) to hyphenate arbitrary text on a website.

## Setup
If you don't already have it installed, install [browserify](https://www.npmjs.com/package/browserify) in order to build the main.js file.
Run `npm install`.
Build the main.js file by running `browserify app.js -o main.js`.

The text in the element with the ID `"hyphenatepls"` will be inserted with soft-hyphens.
