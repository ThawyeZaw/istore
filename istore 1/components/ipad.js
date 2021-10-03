app.component('ipad', {
	template: template,
	data() {
		return {
			brand: 'Ipad 2021',
			details: ipad,
			df: {
				name: ipad[0].name,
				color: ipad[0].color,
				images: ipad[0].images,
				onSale: ipad[0].onSale,
			},
		}
	},
	methods: {
		change(i) {
			return eval(change_)
		},
	},
})
