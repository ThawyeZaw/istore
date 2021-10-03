app.component('iphone13pro', {
	template: template,
	data() {
		return {
			brand: 'Iphone 13 Pro',
			details: iphone13pro,
			df: {
				name: iphone13pro[0].name,
				color: iphone13pro[0].color,
				images: iphone13pro[0].images,
				onSale: iphone13pro[0].onSale,
			},
		}
	},
	methods: {
		change(i) {
			return eval(change_)
		},
	},
})
