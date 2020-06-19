<template>
    <div>
        <el-row>
            <el-col :span="12">
                <MonacoEditor ref="renderPreviewEditor" v-model="html" language="html" />
            </el-col>
            <el-col :span="12">
                <iframe ref="previewIframe" src="preview.html" class="result-wrapper" frameborder="0" @load="iframeLoad"></iframe>
            </el-col>
<!--            <el-col :span="12">-->
<!--                <Parser :form-config="configJson"></Parser>-->
<!--            </el-col>-->
        </el-row>
    </div>
</template>

<script>
    import {render} from '@/components/Parser/main'
    import MonacoEditor from '@/components/CodeEditor/MonacoEditor'
    export default {
        name: 'RenderPreview',
        components: {
            // Parser,
            MonacoEditor
        },
        data() {
            return {
                configJson: '',
                formConfig: null,
                html: ''
            }
        },
        methods: {
            updateConfigEditor(val) {
                this.formConfig = val
                this.configJson = JSON.stringify(val, null, 4)
                this.html = render(this.formConfig)
            },
            iframeLoad(){
                console.log("iframe load...");
                const postData = {
                    type: 'refreshFrame',
                    data: {
                        template: this.html
                    }
                }
                this.$refs['previewIframe'].contentWindow.postMessage(postData, location.origin)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .result-wrapper {
        height: calc(100vh - 33px);
        width: 100%;
        overflow: auto;
        padding: 12px;
        box-sizing: border-box;
    }
</style>
