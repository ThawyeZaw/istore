app.component('airpodsmax', {
	template: template,
	data() {
		return {
			brand: 'AirPods Max',
			details: airpodsmax,
			df: {
				name: airpodsmax[0].name,
				color: airpodsmax[0].color,
				images: airpodsmax[0].images,
				onSale: airpodsmax[0].onSale,
			},
		}
	},
	methods: {
		change(i) {
			return eval(change_)
		},
	},
})
