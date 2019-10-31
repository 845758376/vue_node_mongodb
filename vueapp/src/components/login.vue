<template>
	<div>
		
	</div>
</template>

<script>
	export default {
		name:"login",
		data(){//这种写法只在组件中。
			return {//return,的使用会让变量只在当前页面起作用不会影响其他的组件，不会造成变量污染。
				msg: '12345',
			};
		},
		methods:{
			
		}
	}
</script>
<style scoped>
</style>