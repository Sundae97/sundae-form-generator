<template>
    <el-form>
        <draggable class="components-list" :list="formComponents" :animation="340" group="formGroup" :sort="true">
            <VFormItem v-for="(item, index) in formComponents" :key="index" v-model="item.config"/>
        </draggable>
    </el-form>
</template>

<script>
    import draggable from "vuedraggable";
    import VFormItem from "@/components/formItem/v-form-item";
    // import {vComponents} from "@/components/generator/vComponents"

    // const componentList = {};
    // vComponents.forEach(item => componentList[item.config.tag] = item.component);

    export default {
        name: "CenterBoard",
        components: {
            draggable,
            VFormItem,
        },
        data() {
            return {
                formComponents: [],
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
            display: inline-block;
            width: 48%;
            margin: 1%;
            transition: transform 0ms !important;
        }
    }
</style>
