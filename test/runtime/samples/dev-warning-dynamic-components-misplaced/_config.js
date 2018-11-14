export default {
	compileOptions: {
		dev: true
	},

	props: {
		x: true
	},

	html: '',

	warnings: [
		`<Main$> expected to find 'Foo' in \`data\`, but found it in \`components\` instead`,
		`<Main$> expected to find 'Bar' in \`data\`, but found it in \`components\` instead`
	]
};