app.component('macbookpro', {
	template: template,
	data() {
		return {
			brand: 'MacBook Pro',
			details: macbookpro,
			df: {
				name: macbookpro[0].name,
				color: macbookpro[0].color,
				images: macbookpro[0].images,
				onSale: macbookpro[0].onSale,
			},
		}
	},
	methods: {
		change(i) {
			return eval(change_)
		},
	},
})
