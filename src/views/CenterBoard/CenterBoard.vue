<template>
  <el-form>
    <draggable
      class="components-list"
      :list="formComponents"
      :animation="340"
      group="formGroup"
      :sort="true"
    >
      <v-el-form-item
        v-for="(item, index) in formComponents"
        :key="index"
        :tag="item.tag"
        :component="item.component"
        :config="item.config"
        :options="item.options"
        @click.native="onSelectedItem(item)"
      />
    </draggable>
  </el-form>
</template>

<script>
import draggable from 'vuedraggable'
import VELFormItem from '@/components/Generator/v-el-form-item'

export default {
  name: 'CenterBoard',
  components: {
    draggable,
    'v-el-form-item': VELFormItem
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
</style>
