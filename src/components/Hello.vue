<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<hr />
		<div>
			Im going to 
			<Form />
			<template v-if='country'>
				<hr/>
				<br/> In {{country}} you will need
				<ul>
					<li v-for='thing in things'>
						{{ thing.description}}
					</li>
				</ul>
			</template>
		</div>
		<hr />
	</div>
</template>

<script>
	import { countries, pack } from '../service/packService';
	import Form from './Form';

	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to pack-me',
				country: '',
				countries
			};
		},
		components: { Form },
		computed: {
			things() { return pack(this.country); }
		}
	};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>