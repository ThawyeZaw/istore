const template = /*html*/`
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
)`