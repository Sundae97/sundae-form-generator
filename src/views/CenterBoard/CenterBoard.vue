<template>
    <div>
        <el-form style="min-height: 300px;">
            <draggable :list="formComponents" :animation="340" group="formGroup" :sort="true">
                <component v-for="(item, index) in formComponents" :key="index" :is="item.tag"></component>
            </draggable>
        </el-form>
    </div>
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

<style scoped>

</style>
