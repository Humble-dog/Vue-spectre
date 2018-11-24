import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import '../node_modules/spectre.css/src/spectre.scss'
import '../node_modules/spectre.css/src/spectre-exp.scss'
import '../node_modules/spectre.css/src/spectre-icons.scss'

/***********
 * Element *
 ***********/
import Table from './components/elements/Table.vue'
import Button from './components/elements/Button.vue'
import Form from './components/elements/Form/Index.vue'
import Input from './components/elements/Form/Input.vue'
import Radio from './components/elements/Form/Radio.vue'
import Slider from './components/elements/Form/Slider.vue'
import Select from './components/elements/Form/Select.vue'
import Switch from './components/elements/Form/Switch.vue'
import Textarea from './components/elements/Form/Textarea.vue'
import Checkbox from './components/elements/Form/Checkbox.vue'
import Datepicker from './components/elements/Form/Datepicker.vue'
import Icon from './components/elements/Icon.vue'
import Label from './components/elements/Label.vue'
import Code from './components/elements/Code.vue'
import Video from './components/elements/Video.vue'

/**************
 * Components *
 **************/
import Accordion from './components/components/Accordions/Accordions.vue'
import Avatar from './components/components/Avatars.vue'
import Badge from './components/components/Badges.vue'
import Bar from './components/components/Bars.vue'
import Breadcrumb from './components/components/Breadcrumbs.vue'
import Card from './components/components/Cards/Cards.vue'
import CardImage from './components/components/Cards/Card-image.vue'
import CardHeader from './components/components/Cards/Card-header.vue'
import CardBody from './components/components/Cards/Card-body.vue'
import CardFooter from './components/components/Cards/Card-footer.vue'
import Chip from './components/components/Chips.vue'
import EmptyState from './components/components/Empty-state/Empty-state.vue'
import EmptyTitle from './components/components/Empty-state/Empty-title.vue'
import EmptySubtitle from './components/components/Empty-state/Empty-subtitle.vue'
import EmptyAction from './components/components/Empty-state/Empty-action.vue'

const Components = {
  /* Elements */
  Table,
  Button,
  Form,
  Input,
  Radio,
  Slider,
  Select,
  Switch,
  Textarea,
  Checkbox,
  Datepicker,
  Icon,
  Label,
  Code,
  Video,
  /* Components */
  Accordion,
  Avatar,
  Badge,
  Bar,
  Breadcrumb,
  Card,
  CardImage,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  EmptyState,
  EmptyTitle,
  EmptySubtitle,
  EmptyAction
}

Vue.config.productionTip = false

Object.keys(Components).forEach(name => {
  Vue.component('sp-' + (name.charAt(0) + name.slice(1).split('').map(c => c === c.toUpperCase() ? '-' + c : c).join('')).toLowerCase(), Components[name])
})

Vue.prototype.spSizes = {
  'large': 'lg',
  'small': 'sm'
}

Vue.directive('loading', {
  inserted: function (el) {
    el.className += ' loading'
  }
})

Vue.use(VeeValidate)

new Vue({
  render: h => h(App)
}).$mount('#app')
