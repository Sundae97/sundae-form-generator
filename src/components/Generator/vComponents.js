export const vComponents = [
  {
    componentName: '按钮',
    tag: 'v-el-button',
    component: () => import('@/components/Generator/v-el-button'),
    configPanelComponent: () => import('@/components/Generator/ConfigPanel/v-el-button-config')
  },
  {
    componentName: '输入框',
    tag: 'v-el-input',
    component: () => import('@/components/Generator/v-el-input'),
    configPanelComponent: () => import('@/components/Generator/ConfigPanel/v-el-input-config')
  },
  {
    componentName: '开关',
    tag: 'v-el-switch',
    component: () => import('@/components/Generator/v-el-switch'),
    configPanelComponent: () => import('@/components/Generator/ConfigPanel/v-el-switch-config')
  }
]
