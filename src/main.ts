import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
