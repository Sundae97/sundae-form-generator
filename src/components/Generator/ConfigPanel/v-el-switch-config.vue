<template>
  <el-form label-width="50px">
    <el-form-item label="标题">
      <el-input v-model="options.label" />
    </el-form-item>
    <el-form-item label="栅格">
      <el-slider v-model="options.span" :min="1" :max="24" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'VElSwitchConfig',
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
