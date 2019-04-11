import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import detail from '@/views/detail'
// import index from '@/views/index'
// import list from '@/views/list'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list')
    }
  ]
})
