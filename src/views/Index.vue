<template>
    <div>
        <el-header height="">
            <span>{{ $store.state.name }}</span>
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
                    <CenterBoard/>
                </el-scrollbar>
            </div>
            <div class="right-board">
                <el-scrollbar>
                    <RightBoard/>
                </el-scrollbar>
            </div>
        </el-main>
        <el-drawer :visible.sync="mainDrawer" size="100%">
            <DrawerBoard />
        </el-drawer>
    </div>
</template>

<script>
    import LeftBoard from "@/views/LeftBoard/LeftBoard";
    import CenterBoard from "@/views/CenterBoard/CenterBoard";
    import RightBoard from "@/views/RightBroad/RightBoard";
    import DrawerBoard from "@/views/DrawerBoard/DrawerBoard";

    export default {
        name: "Index",
        components: {
            DrawerBoard,
            LeftBoard,
            CenterBoard,
            RightBoard
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
