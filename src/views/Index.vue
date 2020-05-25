<template>
    <div>
        <el-header height="42px">
            <span>表单生成器</span>
        </el-header>
        <el-main>
            <div class="left-board">
                <el-scrollbar>

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
            <!--            <div class="left-board">-->
            <!--                <el-srollbar class="left-scrollbar">-->
            <!--                    <LeftBoard/>-->
            <!--&lt;!&ndash;                    <draggable&ndash;&gt;-->
            <!--&lt;!&ndash;                            :list="componentList"&ndash;&gt;-->
            <!--&lt;!&ndash;                            :animation="340"&ndash;&gt;-->
            <!--&lt;!&ndash;                            :group="{ name: 'testgroup', pull: 'clone', put: false }"&ndash;&gt;-->
            <!--&lt;!&ndash;                            :sort="false"&ndash;&gt;-->
            <!--&lt;!&ndash;                            :clone="onCloneHandler"&ndash;&gt;-->
            <!--&lt;!&ndash;                    >&ndash;&gt;-->
            <!--&lt;!&ndash;                        <div&ndash;&gt;-->
            <!--&lt;!&ndash;                                class="component-item"&ndash;&gt;-->
            <!--&lt;!&ndash;                                v-for="item in componentList"&ndash;&gt;-->
            <!--&lt;!&ndash;                                :key="item.key"&ndash;&gt;-->
            <!--&lt;!&ndash;                        >{{item.label}}&ndash;&gt;-->
            <!--&lt;!&ndash;                        </div>&ndash;&gt;-->
            <!--&lt;!&ndash;                    </draggable>&ndash;&gt;-->
            <!--                </el-srollbar>-->
            <!--            </div>-->
            <!--            <div class="center-board">-->
            <!--                <div class="center-scrollbar">-->
            <!--                    <Main @onSelectComponent="onSelectFormComponent"/>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="right-board">-->
            <!--                <component :is="configView" v-model="config"></component>-->
            <!--            </div>-->
        </el-main>
    </div>
</template>

<script>
    // import LeftBoard from "@/views/LeftBoard";
    export default {
        name: "Index",
        // components: {LeftBoard},
    }
</script>

<style lang="scss">
    @import '~@/styles/index.scss';
</style>
