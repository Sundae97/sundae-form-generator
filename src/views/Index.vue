<template>
  <div>
    <el-header height="">
      <span>表单生成器</span>
      <el-button style="float:right;margin-top: 8px;" @click="openConfigPreviewDrawer">查看Json</el-button>
      <el-button style="float:right;margin-top: 8px;margin-right: 10px;" @click="openRenderPreviewDrawer">界面渲染</el-button>
    </el-header>
    <el-main>
      <div class="left-board">
        <el-scrollbar>
          <LeftBoard />
        </el-scrollbar>
      </div>
      <div class="center-board">
        <el-scrollbar>
          <CenterBoard />
        </el-scrollbar>
      </div>
      <div class="right-board">
        <el-scrollbar>
          <RightBoard />
        </el-scrollbar>
      </div>
    </el-main>
    <el-drawer :visible.sync="configPreviewDrawer" size="100%">
      <DrawerBoard ref="configPreview" />
    </el-drawer>
    <el-drawer :visible.sync="renderPreviewDrawer" size="100%">
      <RenderPreview ref="renderPreview" />
    </el-drawer>
  </div>
</template>

<script>
import LeftBoard from '@/views/LeftBoard/LeftBoard'
import CenterBoard from '@/views/CenterBoard/CenterBoard'
import RightBoard from '@/views/RightBroad/RightBoard'
import DrawerBoard from '@/views/DrawerBoard/DrawerBoard'
import RenderPreview from "@/views/DrawerBoard/RenderPreview";

export default {
  name: 'Index',
  components: {
    DrawerBoard,
    LeftBoard,
    CenterBoard,
    RightBoard,
    RenderPreview
  },
  data() {
    return {
      configPreviewDrawer: false,
      renderPreviewDrawer: false
    }
  },
  methods: {
    openConfigPreviewDrawer() {
      this.configPreviewDrawer = true
      this.$nextTick(() => {
        this.$refs['configPreview'].updateConfigEditor(this.$store.state.formConfig)
      })
    },
    openRenderPreviewDrawer(){
      this.renderPreviewDrawer = true
      this.$nextTick(() => {
        this.$refs['renderPreview'].updateConfigEditor(this.$store.state.formConfig)
      })
    },
  }
}
</script>

<style lang="scss">
    @import '~@/styles/index.scss';
</style>
