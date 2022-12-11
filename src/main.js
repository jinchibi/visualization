import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as Echarts from 'echarts'
import VueECharts from 'vue-echarts'
import './plugins/vcharts'
import './style/index.css'
// import VCharts from 'v-charts'

// // 在main中引入 v - charts
// import VCharts from 'v-charts'
// Vue.use(VCharts)

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
