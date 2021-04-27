import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)
// Adding the routes of Login and Game.
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
]

const router = new VueRouter({
  routes
})

export default router
