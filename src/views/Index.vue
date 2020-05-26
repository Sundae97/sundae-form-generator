<template>
    <div>
        <el-header height="">
            <span>表单生成器</span>
            <el-button @click="mainDrawer=true" style="float:right;margin-top: 8px;">打开Drawer</el-button>
        </el-header>
        <el-main>
            <div class="left-board">
                <el-scrollbar>
                    <LeftBoard/>
                </el-scrollbar>
            </div>
            <div class="center-board">
                <el-scrollbar>
                </el-scrollbar>
            </div>
            <div class="right-board">
                <el-scrollbar>
                </el-scrollbar>
            </div>
        </el-main>
        <el-drawer :visible.sync="mainDrawer" size="100%"></el-drawer>
    </div>
</template>

<script>
    import LeftBoard from "@/views/LeftBoard/LeftBoard";

    export default {
        name: "Index",
        components: {
            LeftBoard
        },
        data() {
            return {
                mainDrawer: false,
            }
        }
    }
</script>

<style lang="scss">
    @import '~@/styles/index.scss';
</style>
