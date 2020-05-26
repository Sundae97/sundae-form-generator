<template>
    <el-form>
        <draggable class="components-list" :list="formComponents" :animation="340" group="formGroup" :sort="true">
            <component v-for="(item, index) in formComponents" :key="index" :is="item.tag"></component>
        </draggable>
    </el-form>
</template>

<script>
    import draggable from "vuedraggable";
    import {vComponents} from "@/components/generator/vComponents"

    const componentList = {};
    vComponents.forEach(item => componentList[item.tag] = item.component);
    export default {
        name: "CenterBoard",
        components: {
            draggable,
            ...componentList
        },
        data() {
            return {
                formComponents: [],
            }
        }
    }
</script>

<style lang="scss">
    @import '~@/styles/index.scss';
</style>
