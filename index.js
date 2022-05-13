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
      'format': 'wp-scripts format --config @university-of-missouri/prettier-config',
      'lint:js': 'wp-scripts lint-js --config @university-of-missouri/eslint-plugin --ignore-path .eslintignore',
      'lint:pkg-json': 'wp-scripts lint-pkg-json',
      'lint:style': 'wp-scripts lint-style --config @university-of-missouri/stylelint-config',
      'start': 'wp-scripts start'
    },
    npmDependencies: [
      '@university-of-missouri/mizzou-design-system'
    ],
    npmDevDependencies: [
      '@university-of-missouri/babel-preset-default',
      '@university-of-missouri/browserslist-config',
      '@university-of-missouri/eslint-plugin',
      '@university-of-missouri/prettier-config',
      '@university-of-missouri/stylelint-config',
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