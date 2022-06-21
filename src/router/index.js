import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/landingView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/:id',
    name: 'id',
    component: () => import(/* webpackChunkName: "about" */ '../views/firstInnerView.vue'),
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/insideViews/workspaceView.vue'),
        name: 'workspace'
      },
    ]
  },
  // {
  //   path: '/*',
  //   name: 'error',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/error404.vue'),
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
