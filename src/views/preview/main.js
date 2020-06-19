import Vue from 'vue'

const $previewApp = document.getElementById('previewApp')

window.addEventListener('message', init, false);

function init(event) {
    if (event.data.type === 'refreshFrame') {
        let template = event.data.data.template
        $previewApp.innerHTML = `<div id="app"></div>`
        newVue(template)
    }
}

function newVue(html){
    let main = `{
        components:{},
        data(){
            return {
                form: {}
            }
        },
    }`
    main = eval(`(${main})`)
    main.template = `<div><span>test</span></div>`
    console.log(main)
    new Vue({
        components: {
            child: main
        },
        template:'<div><child /></div>'
    }).$mount('#app')
}
