const { join } = require( 'path' );

module.exports = {
	blockTemplatesPath: join( __dirname, 'templates/block' ),
	pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
	defaultValues: {
		author: 'Truman Tiger',
		namespace: 'mizzou',
		dashicon: 'carrot',
		description: 'A custom block.',
		npmDependencies: [
			'@university-of-missouri/mizzou-design-system'
		],
		npmDevDependencies: [
			'@university-of-missouri/browserslist-config',
			'classnames',
		]
	},
}