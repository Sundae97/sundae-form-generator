<template>
  <div ref="container" class="monaco-container" />
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
  name: 'MonacoEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'json'
    },
    editorOptions: {
      type: Object,
      default: function() {
        return {
          language: this.language,
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
          fontSize: 14
        }
      }
    }
  },
  data() {
    return {
      monacoEditor: null
    }
  },
  watch: {
    value(newVal) {
      this.monacoEditor.setValue(newVal)
    }
  },
  mounted() {
    this.monacoEditor = monaco.editor.create(this.$refs.container, {
      value: this.value, // 见props
      ...this.editorOptions // 同codes
    })
  },
  methods: {
    getValue() {
      return this.monacoEditor.getValue()
    }
  }
}
</script>

<style>
    .monaco-container {
        height: 100vh;
        width: 100%;
    }
</style>
