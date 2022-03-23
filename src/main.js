import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
global.$ = jQuery
import 'bootstrap'
import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from "aos"
import 'aos/dist/aos.css'
import Axios from 'axios'
import VueToast from 'vue-toast-notification';
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import checkView from 'vue-check-view'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
import i18n from './i18n'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

const langString = window.localStorage.getItem("lang");
if (langString) {
  let lang = JSON.parse(window.localStorage.getItem("lang"));
  if (lang.length) {
    i18n.locale = lang
  }
}
window.localStorage.setItem("lang", JSON.stringify(i18n.locale));


Vue.prototype.$http = Axios;


Vue.prototype.$unsplash = 'https://source.unsplash.com/random';


class AosPlugin {
  config = {
    // Your AOS config here
  }

  install(Vue) {
    AOS.init(this.config)

    Vue.mixin({
      updated() {
        this.$nextTick(function () {
          AOS.refreshHard() // This is needed to avoid the un-animate aos effect
        })
      }
    })
  }
}

Vue.use(new AosPlugin())
Vue.use(vueSmoothScroll)
Vue.use(VueToast)
Vue.use(checkView)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  Vue.prototype.$axi = Axios.create({
    baseURL: 'https://admin.avantage.events/api/',
    // headers: {
    //   'content-language': i18n.locale
    // }
  });
  next();
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')