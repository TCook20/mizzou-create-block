const { join } = require( 'path' );

module.exports = {
  blockTemplatesPath: join( __dirname, 'templates/src' ),
  pluginTemplatesPath: join( __dirname, 'templates/block' ),
  defaultValues: {
    author: 'Truman Tiger',
    namespace: 'mizzou',
    dashicon: 'carrot',
  },
  npmDependencies: [],
  npmDevDependencies: [
    {"@university-of-missouri/mizzou-design-system": "^3.0.0-beta.10"},
    {"@university-of-missouri/browserslist-config": "^1.1.1"},
  ]
}