import { vComponents } from './vComponents'
import { getConfigPanelTagName } from '@/utils/common'

// 全局注册所有组件
export default {
  install: function(Vue) {
    vComponents.forEach(item => {
      Vue.component(item.tag, item.component)
      Vue.component(getConfigPanelTagName(item.tag), item.configPanelComponent)
    })
  }
}
