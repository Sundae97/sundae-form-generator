<template>
  <el-form>
    <draggable
      class="components-list"
      :list="formComponents"
      :animation="340"
      group="formGroup"
      :sort="true"
    >
      <el-col
        v-for="(item, index) in formComponents"
        :key="index"
        :span="item.options.span"
        @click.native="onSelectedItem(item)"
      >
        <el-form-item
          class="components-item"
          :label="item.options.label"
          :label-width="item.options.labelWidth"
          :required="item.options.required"
        >
          <component :is="item.tag" :options="item.options" />
        </el-form-item>
      </el-col>
    </draggable>
  </el-form>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'CenterBoard',
  components: {
    draggable
  },
  data() {
    return {
      formComponents: []
    }
  },
  watch: {
    formComponents(val) {
      this.$store.commit('formConfig', val)
    }
  },
  methods: {
    onSelectedItem(item) {
      console.log(item)
      this.$store.commit('selectedItem', item)
    }
  }
}
</script>

<style lang="scss">
    @import "~@/styles/constants.scss";

    .components-list {
        padding: 8px;
        box-sizing: border-box;
        height: calc(100vh - #{$headerHeight});
        position: relative;
    }
    .components-item {
      cursor: move;
      padding: 6px;
      margin: 2px 6px;
      border-width: 2px;
      border-color: #cccccc;
      border-style: dashed;
    }
</style>
