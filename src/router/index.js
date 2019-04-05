import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/views/detail'
import index from '@/views/index'
import list from '@/views/list'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
