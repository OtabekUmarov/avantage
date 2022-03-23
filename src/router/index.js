import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // scrollBehavior(to, from, savedPosition) {
  //   console.log(to + ' - ', from);
  //   return {
  //     selector: to.hash,
  //   }
    // if (savedPosition) {
    //   return savedPosition;
    // } else if (to.hash) {
    //   return {
    //     selector: to.hash
    //   };
    // } else {
    //   return {
    //     x: 0,
    //     y: 0
    //   };
    // }
  // },
  routes
})

export default router