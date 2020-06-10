<template>
    <div>
        <el-row>
            <el-col :span="12">
                <MonacoEditor ref="renderPreviewEditor" v-model="configJson" />
            </el-col>
            <el-col :span="12">
                <iframe src="preview.html" class="result-wrapper" frameborder="0"></iframe>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import MonacoEditor from '@/components/CodeEditor/MonacoEditor'
    export default {
        name: 'RenderPreview',
        components: {
            MonacoEditor
        },
        data() {
            return {
                configJson: ''
            }
        },
        methods: {
            updateConfigEditor(val) {
                this.configJson = JSON.stringify(val, null, 4)
            }
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
