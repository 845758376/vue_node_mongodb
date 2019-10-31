import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import index from '@/components/index'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
		{
		  path: '/index',
		  name: 'index',
		  component: index
		},
		{
		  path: '/login',
		  name: 'login',
		  component: login
		},
  ]
})
