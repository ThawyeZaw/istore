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
