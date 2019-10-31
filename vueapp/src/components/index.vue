<template>
	<div><router-link :to="{ name: 'hello' }">跳转login</router-link></div>
</template>

<script>
export default {
	name: 'index',
	data() {
		return {
			msg: '12345'
		};
	},
	methods: {}
};
</script>

<style></style>
