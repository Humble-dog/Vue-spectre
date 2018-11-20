import Vue from 'vue'
import App from './App.vue'
import './assets/scss/spectre/src/spectre.scss'
import './assets/scss/spectre/src/spectre-exp.scss'
import './assets/scss/spectre/src/spectre-icons.scss'

import button from './components/elements/Button.vue'
import label from './components/elements/Label.vue'
import table from './components/elements/Table.vue'
import code from './components/elements/Code.vue'
import icon from './components/elements/Icon.vue'

const Components = {
  button,
  label,
  table,
  code,
  icon
}
Vue.config.productionTip = false

Object.keys(Components).forEach(name => {
  Vue.component('sp-' + name, Components[name])
})

Vue.prototype.spSizes = {
  'large' : 'lg',
  'small' : 'sm',
}

const vm = new Vue({
  render: h => h(App)
}).$mount('#app')