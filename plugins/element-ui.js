import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
import '../assets/css/element-variables.scss'

export default () => {
  Vue.use(Element, { locale })
}
