const template = /*html*/ `
		<div class="container">
			<div class="product_image">
				<img v-bind:src="df.images" alt="Iphone 13" />
			</div>
			<div class="details">
				<h1 class="brandname">{{ brand }}</h1>
				<h2 class="color_name">{{ df.name }}</h2>
				<div class="colors">
					<div
						class="color"
						v-for="(detail, i) in details"
						:style="{ backgroundColor: details[i].color }"
						@mouseover="change(i)"
					></div>
				</div>
				<h3 class="sale">
					<p v-if="df.onSale">Avaiable now</p>
					<p v-else>Out of stocks</p>
				</h3>
				<div class="more"></div>
			</div>
		</div>`,
	change_ = `(
	(this.df.color = this.details[i].color),
	(this.df.images = this.details[i].images),
	(this.df.name = this.details[i].name),
	(this.df.onSale = this.details[i].onSale)
)`,
	iphone13 = [
		{
			name: 'blue',
			color: '#3bbcff',
			images: 'public/images/Iphone13/lblue.png',
			onSale: true,
		},
		{
			name: 'midnight',
			color: '#192028',
			images: 'public/images/Iphone13/midnight.png',
			onSale: false,
		},
		{
			name: 'starlight',
			color: 'lightgrey',
			images: 'public/images/Iphone13/starlight.png',
			onSale: true,
		},
		{
			name: 'pink',
			color: '#FFC0CB',
			images: 'public/images/Iphone13/pink.png',
			onSale: false,
		},
		{
			name: 'red',
			color: '#AC0415',
			images: 'public/images/Iphone13/red.png',
			onSale: true,
		},
	],
	iphone13pro = [
		{
			name: 'gold',
			color: '#F2E92C',
			images: 'public/images/Iphone13pro/gold.png',
			onSale: true,
		},
		{
			name: 'silver',
			color: '#CFD0CA',
			images: 'public/images/Iphone13pro/silver.png',
			onSale: false,
		},
		{
			name: 'sierra blue',
			color: '#406ED0',
			images: 'public/images/Iphone13pro/sierra_blue.png',
			onSale: true,
		},
		{
			name: 'graphite',
			color: '#4A4945',
			images: 'public/images/Iphone13pro/graphite.png',
			onSale: false,
		},
	],
	ipad = [
		{
			name: 'green',
			color: '#12CB7F',
			images: 'public/images/ipad/green.png',
			onSale: true,
		},
		{
			name: 'rose gold',
			color: '#FC6B96',
			images: 'public/images/ipad/rosegold.png',
			onSale: false,
		},
		{
			name: 'starlight',
			color: '#C9CACE',
			images: 'public/images/ipad/silver.png',
			onSale: true,
		},
		{
			name: 'sky blue',
			color: '#6DE8FA',
			images: 'public/images/ipad/skyblue.png',
			onSale: false,
		},
		{
			name: 'space grey',
			color: '#4E525B',
			images: 'public/images/ipad/spacegrey.png',
			onSale: true,
		},
	],
	applewatch = [
		{
			name: 'abyss blue',
			color: '#3D4D64',
			images: 'public/images/applewatch/abyssblue.jpg',
			onSale: true,
		},
		{
			name: 'green',
			color: '#516951',
			images: 'public/images/applewatch/green.jpg',
			onSale: false,
		},
		{
			name: 'midnight',
			color: '#717882',
			images: 'public/images/applewatch/midnight.jpg',
			onSale: true,
		},
		{
			name: 'starlight',
			color: '#E0D6CD',
			images: 'public/images/applewatch/starlight.jpg',
			onSale: true,
		},
		{
			name: 'red',
			color: '#DE4C61',
			images: 'public/images/applewatch/red.jpg',
			onSale: false,
		},
	],
	macbookpro = [
		{
			name: 'silver',
			color: '#C9CACE',
			images: 'public/images/macbookpro/silver.jpg',
			onSale: false,
		},
		{
			name: 'space grey',
			color: '#4E525B',
			images: 'public/images/macbookpro/spacegrey.jpg',
			onSale: true,
		},
	],
	airpodsmax = [
		{
			name: 'blue',
			color: '#3D4D64',
			images: 'public/images/airpodsmax/blue.jpg',
			onSale: true,
		},
		{
			name: 'green',
			color: '#516951',
			images: 'public/images/airpodsmax/green.jpg',
			onSale: false,
		},
		{
			name: 'pink',
			color: '#FFC0CB',
			images: 'public/images/airpodsmax/pink.jpg',
			onSale: true,
		},
		{
			name: 'silver',
			color: '#E0D6CD',
			images: 'public/images/airpodsmax/silver.jpg',
			onSale: true,
		},
		{
			name: 'spacegrey',
			color: '#4E525B',
			images: 'public/images/airpodsmax/spacegrey.jpg',
			onSale: false,
		},
	]
