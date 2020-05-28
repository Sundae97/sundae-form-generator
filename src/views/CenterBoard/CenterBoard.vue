<template>
    <el-form>
        <draggable class="components-list"
                   :list="formComponents"
                   :animation="340"
                   group="formGroup"
                   :sort="true">
            <v-el-form-item class="components-item"
                            v-for="(item, index) in formComponents" :key="index"
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
                this.$store.commit("selectedItem", item);
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
            padding: 6px;
            border-width: 2px;
            border-color: #cccccc;
            border-style: dashed;
        }

        .el-form-item {
            margin-bottom: 6px;
        }
    }
</style>
