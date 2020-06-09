<template>
  <el-col :span="options.span">
    <el-form-item
      class="components-item"
      :label="options.label"
      :label-width="options.labelWidth"
    >
      <component :is="tag" :options="options" />
    </el-form-item>
  </el-col>
</template>

<script>
export default {
  name: 'VFormItem',
  components: {
  },
  props: {
    tag: {
      type: String,
      default: ''
    },
    component: {
      type: Function,
      default: new Function()
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    // this.$options.components[this.tag] = this.component
  }
}
</script>

<style>
.components-item {
    cursor: move;
    padding: 6px;
    margin: 2px 6px;
    border-width: 2px;
    border-color: #cccccc;
    border-style: dashed;
}
</style>
