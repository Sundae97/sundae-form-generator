<template>
  <el-button>{{ options.text }}</el-button>
</template>

<script>
export default {
  name: 'VElButton',
  props: {
    options: {
      type: Object,
      default: () => Object()
    }
  }
}
</script>

<style scoped>

</style>
