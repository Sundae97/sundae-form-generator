<template>
  <el-input v-model="options.vModel" />
</template>

<script>
export default {
  name: 'VElInput',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
