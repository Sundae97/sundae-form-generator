import {componentParsers} from './ComponentParser/main'

function renderForm(config, content) {
    return `<el-form :model="form">${content}</el-form>`
}

function renderFormItem(componentConfig, content) {
    return `<el-form-item>${content}</el-form-item>`
}

function renderItemComponent(componentConfig) {
    return componentParsers[componentConfig.tag](componentConfig)
}

export function render(formConfig) {
    let formItems = ''
    formConfig.formComponents.forEach(componentConfig => {
        let component = renderItemComponent(componentConfig)
        let formItem = renderFormItem(componentConfig, component)
        formItems += formItem
    })
    return renderForm(formConfig, formItems)
}
