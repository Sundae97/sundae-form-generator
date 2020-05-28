<template>
    <div ref="container" class="monaco-container"></div>
</template>

<script>
    import * as monaco from 'monaco-editor'
    export default {
        name: "MonacoEditor",
        props: {
            editorOptions: {
                type: Object,
                default: function () {
                    return {
                        language: 'javascript',
                        theme: 'vs-dark', // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
                        automaticLayout: true,
                        autoIndent: true,
                        autoClosingBrackets: true,
                        acceptSuggestionOnEnter: 'on',
                        colorDecorators: true,
                        dragAndDrop: true,
                        formatOnPaste: true,
                        formatOnType: true,
                        mouseWheelZoom: true,
                        fontSize: 20
                    }
                }
            }
        },
        mounted() {
            this.monacoEditor = monaco.editor.create(this.$refs.container, {
                value: 'function a(){ console.log("test"); }', // 见props
                ...this.editorOptions // 同codes
            })
        },
        data(){
            return {
                monacoEditor: null,
            }
        }
    }
</script>

<style>
.monaco-container{
    height: 100vh;
    width: 50%;
}
</style>