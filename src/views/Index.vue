<template>
  <div>
    <el-header height="">
      <span>表单生成器</span>
      <el-button style="float:right;margin-top: 8px;" @click="openDrawer">打开Drawer</el-button>
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
    <el-drawer :visible.sync="mainDrawer" size="100%">
      <DrawerBoard ref="configDrawer" />
    </el-drawer>
  </div>
</template>

<script>
import LeftBoard from '@/views/LeftBoard/LeftBoard'
import CenterBoard from '@/views/CenterBoard/CenterBoard'
import RightBoard from '@/views/RightBroad/RightBoard'
import DrawerBoard from '@/views/DrawerBoard/DrawerBoard'

export default {
  name: 'Index',
  components: {
    DrawerBoard,
    LeftBoard,
    CenterBoard,
    RightBoard
  },
  data() {
    return {
      mainDrawer: false
    }
  },
  methods: {
    openDrawer() {
      this.mainDrawer = true
      this.$nextTick(() => {
        this.$refs['configDrawer'].updateConfigEditor(this.$store.state.formConfig)
      })
    }
  }
}
</script>

<style lang="scss">
    @import '~@/styles/index.scss';
</style>
