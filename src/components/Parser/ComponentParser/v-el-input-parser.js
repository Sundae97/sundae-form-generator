export function parser(config) {
    const options = config.options
    // return `<el-input v-model='${options.fieldName}' :rules='${options.rules}' required='${options.required}'></el-input>`
    return `<el-input></el-input>`
}
