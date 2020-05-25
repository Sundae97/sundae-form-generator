<template>
    <div>
        <el-header height="42px">
            <span>表单生成器</span>
        </el-header>
        <el-main>
            <div class="left-board">
                <el-srollbar class="left-scrollbar">
<!--                    <draggable-->
<!--                            :list="componentList"-->
<!--                            :animation="340"-->
<!--                            :group="{ name: 'testgroup', pull: 'clone', put: false }"-->
<!--                            :sort="false"-->
<!--                            :clone="onCloneHandler"-->
<!--                    >-->
<!--                        <div-->
<!--                                class="component-item"-->
<!--                                v-for="item in componentList"-->
<!--                                :key="item.key"-->
<!--                        >{{item.label}}-->
<!--                        </div>-->
<!--                    </draggable>-->
                </el-srollbar>
            </div>
            <div class="center-board">
                <div class="center-scrollbar">
                    <Main @onSelectComponent="onSelectFormComponent"/>
                </div>
            </div>
            <div class="right-board">
                <component :is="configView" v-model="config"></component>
            </div>
        </el-main>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style lang="scss">
    @import '~@/styles/index.scss';
</style>
