import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/iview.js'
import './components/index.js'
import { getInitConfig } from './ipc'
import { init as initShortcut } from './shortcut'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
