app.component('applewatch', {
	template: template,
	data() {
		return {
			brand: 'applewatch Series 7',
			details: applewatch,
			df: {
				name: applewatch[0].name,
				color: applewatch[0].color,
				images: applewatch[0].images,
				onSale: applewatch[0].onSale,
			},
		}
	},
	methods: {
		change(i) {
			return eval(change_)
		},
	},
})
