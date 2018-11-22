import Vue from 'vue'
import App from './App.vue'
import '../node_modules/spectre.css/src/spectre.scss'
import '../node_modules/spectre.css/src/spectre-exp.scss'
import '../node_modules/spectre.css/src/spectre-icons.scss'

/***********
 * Element *
 ***********/
import Table from './components/elements/Table.vue'
import Button from './components/elements/Button.vue'
import Input from './components/elements/Form/Input.vue'
import Radio from './components/elements/Form/Radio.vue'
import Icon from './components/elements/Icon.vue'
import Label from './components/elements/Label.vue'
import Code from './components/elements/Code.vue'

/**************
 * Components *
 **************/
import Accordion from './components/components/Accordions/Accordions.vue'
import Avatar from './components/components/Avatars.vue'

const Components = {
  Table, Button, Input, Radio, Icon, Label, Code, Accordion, Avatar
}

Vue.config.productionTip = false

Object.keys(Components).forEach(name => {
  Vue.component('sp-' + name.toLowerCase(), Components[name])
})

Vue.prototype.spSizes = {
  'large': 'lg',
  'small': 'sm'
}

new Vue({
  render: h => h(App)
}).$mount('#app')
