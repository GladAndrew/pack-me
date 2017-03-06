<template>
	<div class="form">
		<div>
			Im going to 
			<select v-model='country'>
				<option v-for='c in countries' :value='c.id'>{{c.name}}</option>
			</select>
			<br />
			For <input type='text' v-model="days"/> days
		</div>
		<hr />
	</div>
</template>

<script>
	import { countries } from '../service/packService';

	export default {
		name: 'form',
		data() {
			return {
				country: '',
				countries,
				days: ''
			};
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