export const vComponentOptions = {
  'v-el-form': () => {
    return {
      fieldName: 'form',
      formComponents: [],
    }
  },
  'v-el-button': () => {
    return {
      fieldName: '',
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
      requiredMessage: '',
      rules: []
    }
  },
  'v-el-switch': () => {
    return {
      fieldName: '',
      label: '测试开关',
      labelWidth: '120px',
      span: 24,
      vModel: false
    }
  }
}
