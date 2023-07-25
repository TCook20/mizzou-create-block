const { join } = require('path')

module.exports = {
  blockTemplatesPath: join(__dirname, 'templates/block'),
  pluginTemplatesPath: join(__dirname, 'templates/plugin'),
  defaultValues: {
    author: 'Truman Tiger',
    namespace: 'mizzou',
    dashicon: 'carrot',
    description: 'A custom block.',
    wpScripts: true,
    wpEnv: false,
    customScripts: {
      build:
        // eslint-disable-next-line max-len
        'wp-scripts build --webpack-copy-php --webpack-src-dir=src --output-path=build --config webpack.config.js',
      format: 'wp-scripts format --config @university-of-missouri/prettier-config',
      'lint:js':
        // eslint-disable-next-line max-len
        'wp-scripts lint-js --config @university-of-missouri/eslint-config --ignore-path .eslintignore',
      'lint:php': 'phpcs --standard=phpcs.xml . --report=summary',
      'lint:php:fix': 'phpcbf --standard=phpcs.xml . --report=summary',
      'lint:pkg-json': 'wp-scripts lint-pkg-json',
      'lint:style': 'wp-scripts lint-style --config @university-of-missouri/stylelint-config',
      start:
        // eslint-disable-next-line max-len
        'wp-scripts start --webpack-copy-php --webpack-src-dir=src --output-path=build --config webpack.config.js',
    },
    npmDependencies: ['@university-of-missouri/mizzou-design-system'],
    npmDevDependencies: [
      '@university-of-missouri/babel-preset-default',
      '@university-of-missouri/browserslist-config',
      '@university-of-missouri/eslint-config',
      '@university-of-missouri/prettier-config',
      '@university-of-missouri/stylelint-config',
      '@wordpress/babel-preset-default',
      '@wordpress/block-editor',
      '@wordpress/blocks',
      '@wordpress/components',
      '@wordpress/eslint-plugin',
      '@wordpress/i18n',
      '@wordpress/icons',
      '@wordpress/prettier-config',
      '@wordpress/scripts',
      '@wordpress/stylelint-config',
      'classnames',
      'postcss-loader',
      'postcss-preset-env',
      'resolve-url-loader',
    ],
  },
}
