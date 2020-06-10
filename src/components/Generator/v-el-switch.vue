<template>
  <el-switch v-model="options.vModel" />
</template>

<script>
export default {
  name: 'VElSwitch',
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
