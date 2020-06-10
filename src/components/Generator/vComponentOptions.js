export const vComponentOptions = {
  'v-el-button': () => {
    return {
      label: '测试按钮',
      labelWidth: '120px',
      span: 24,
      text: '点击'
    }
  },
  'v-el-input': () => {
    return {
      fieldName: '',
      label: '测试输入框',
      labelWidth: '120px',
      span: 24,
      vModel: '',
      required: false,
      rules: []
    }
  },
  'v-el-switch': () => {
    return {
      label: '测试开关',
      labelWidth: '120px',
      span: 24,
      vModel: false
    }
  }
}
