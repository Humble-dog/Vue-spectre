import Vue from 'vue'
import App from './App.vue'
import '../node_modules/spectre.css/src/spectre.scss'
import '../node_modules/spectre.css/src/spectre-exp.scss'
import '../node_modules/spectre.css/src/spectre-icons.scss'

import button from './components/elements/Button.vue'
import label from './components/elements/Label.vue'
import table from './components/elements/Table.vue'
import form from './components/elements/Form.vue'
import code from './components/elements/Code.vue'
import icon from './components/elements/Icon.vue'

import accordion from './components/components/Accordions/Accordions.vue'
import avatar from './components/components/Avatars.vue'

const Components = {
  button,
  label,
  table,
  form,
  code,
  icon,
  accordion,
  avatar
}
Vue.config.productionTip = false

Object.keys(Components).forEach(name => {
  Vue.component('sp-' + name, Components[name])
})

Vue.prototype.spSizes = {
  'large': 'lg',
  'small': 'sm'
}

new Vue({
  render: h => h(App)
}).$mount('#app')
