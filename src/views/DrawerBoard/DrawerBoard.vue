<template>
  <div>
    <MonacoEditor ref="configEditor" v-model="configJson" />
  </div>
</template>

<script>
import MonacoEditor from '@/components/CodeEditor/MonacoEditor'
export default {
  name: 'DrawerBoard',
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

</style>
