import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Quemsomos from './views/Quemsomos.vue'

Vue.use (Router)

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'quemsomos', path: '/quemsomos', component: Quemsomos}
]

const router = new Router({routes})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
