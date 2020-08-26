import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import VueHead from 'vue-head'

import Home from './views/Home.vue'
import Quemsomos from './views/Quemsomos.vue'
import Trabalhe from './views/Trabalheconosco.vue'
import Maps from './views/Maps.vue'

Vue.use (Router)
Vue.use (VueHead)

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'quemsomos', path: '/quemsomos', component: Quemsomos},
  {name: 'trabalheconosco', path: '/trabalheconosco', component: Trabalhe},
  {name: 'maps', path: '/maps', component: Maps}
]

const router = new Router({routes})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
