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
    path: '/id',
    name: 'id',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/firstInnerView.vue'),
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/insideViews/workspaceView.vue'),
        name: 'workspace'
      },
      {
        path: 'cacc',
        component: () => import(/* webpackChunkName: "about" */ '../views/insideViews/cacc.vue'),
        name: 'cacc'
      },
      {
        path: 'calendar',
        component: () => import(/* webpackChunkName: "about" */ '../views/insideViews/calendarView.vue'),
        name: 'calendar'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
