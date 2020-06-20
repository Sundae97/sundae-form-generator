import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const $previewApp = document.getElementById('previewApp')

window.addEventListener('message', init, false);
Vue.use(ElementUI)

function init(event) {
    if (event.data.type === 'refreshFrame') {
        let template = event.data.data.template
        $previewApp.innerHTML = `<div id="app"></div>`
        newVue(template)
    }
}

function newVue(html) {
    let main = `{
        components:{},
        data(){
            return {
                formData: {
                mobile: '',
                },
                rules: []
            }
        },
    }`
    main = eval(`(${main})`)
    main.template = ``
    console.log(main)
    new Vue({
        components: {
            child: main
        },
        data(){
            return {
                formData: {
                    mobile: '',
                },
                rules: []
            }
        },
        template: `
            <div>
                <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
                    <el-form-item label="单行文本" prop="mobile">
                        <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                                  prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
                    </el-form-item>
                    <el-form-item size="large">
                        <el-button type="primary">提交</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        `
    }).$mount('#app')
}
