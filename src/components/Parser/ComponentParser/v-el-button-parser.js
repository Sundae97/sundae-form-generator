export function parser(config) {
    const options = config.options
    return `<el-button v-model='${options.fieldName}' ></el-button>`
    // return `<el-button></el-button>`
}
