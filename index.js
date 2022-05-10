const { join } = require( 'path' );

module.exports = {
  blockTemplatesPath: join( __dirname, 'templates/block' ),
  pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
  defaultValues: {
    author: 'Truman Tiger',
    namespace: 'mizzou',
    dashicon: 'carrot',
    description: 'A custom block.',
    wpScripts: false,
    wpEnv: false,
    customScripts: {
      'build': 'wp-scripts build',
      'lint:css': 'wp-scripts lint-style',
      'lint:js': 'wp-scripts lint-js',
      'start': 'wp-scripts start'
    },
    npmDependencies: [
      '@university-of-missouri/mizzou-design-system'
    ],
    npmDevDependencies: [
      '@university-of-missouri/browserslist-config',
      '@wordpress/block-editor',
      '@wordpress/blocks',
      '@wordpress/components',
      '@wordpress/i18n',
      '@wordpress/icons',
      '@wordpress/scripts',
      'classnames',
    ]
  },
}