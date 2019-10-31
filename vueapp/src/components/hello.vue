<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<!-- 这是普通的引用数据 -->
		<h2>Essential Links</h2>
		<button v-on:click="goback">获取数据</button>
		<ul v-for="(item, index) in results">
			<li>
				<div>id:{{ item._id }}</div>
				<div>用户名:{{ item.username }}</div>
				<div>密码:{{ item.password }}</div>
				<div>年龄:{{ item.age }}</div>
				<div>创建时间:{{ item.lastLoinDate }}</div>
			</li>
		</ul>
		<router-link :to="{ name: 'index' }">跳转index</router-link>
		<router-link :to="{ name: 'login' }">跳转login</router-link>
	</div>
</template>
<script>
export default {
	name: 'hello',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			results: []
		};
	},
	methods: {
		goback: function() {
			console.log('hah');
			this.axios
				.post('http://localhost:3000/product') //把url地址换成你的接口地址即可
				.then(res => {
					console.log(res.data.data);
					this.results = res.data.data;
				})
				.catch(err => {
					alert('请求失败');
					console.log(err);
				});
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
