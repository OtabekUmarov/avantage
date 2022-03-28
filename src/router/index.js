import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Equipment from '../views/Equipment.vue'
import Service from '../views/Service.vue'
import Stand from '../views/Stand.vue'
import Registration from '../views/Registration.vue'
import Contact from '../views/Contact.vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: Equipment
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/stand',
    name: 'Stand',
    component: Stand
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
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