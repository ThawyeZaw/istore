app.component('iphone13', {
	template: template,
	data() {
		return {
			brand: 'Iphone 13',
			details: iphone13,
			df: { name: iphone13[0].name, 
				   color: iphone13[0].color, 
					images: iphone13[0].images, 
					onSale: iphone13[0].onSale
				},
		}
	},
	methods: {
		change(i) {
			return eval(change_)
		},
	},
})

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
