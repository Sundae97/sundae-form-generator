<template>
    <el-form>
        <draggable class="components-list"
                   :list="formComponents"
                   :animation="340"
                   group="formGroup"
                   :sort="true">
            <v-el-form-item v-for="(item, index) in formComponents" :key="index"
                            :tag="item.tag"
                            :component="item.component"
                            :config="item.config"
                            :options="item.options"
                            @click.native="onSelectedItem(item)"/>
        </draggable>
    </el-form>
</template>

<script>
    import draggable from "vuedraggable";
    import VELFormItem from "@/components/generator/v-el-form-item";

    export default {
        name: "CenterBoard",
        components: {
            draggable,
            "v-el-form-item": VELFormItem,
        },
        data() {
            return {
                formComponents: [],
            }
        },
        methods: {
            onSelectedItem(item){
                console.log(item);
                //TODO 显示和切换右侧配置面板
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

        .components-item {
            cursor: move;
            display: inline-block;
            width: 48%;
            margin: 1%;
            transition: transform 0ms !important;
        }
    }
</style>
