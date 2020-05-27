<template>
    <el-form-item label="测试" label-width="100">
        <component :is="value.tag" />
    </el-form-item>
</template>

<script>
    import {vComponents} from "@/components/generator/vComponents"

    const componentList = {};
    vComponents.forEach(item => componentList[item.config.tag] = item.config.component);
    export default {
        name: "v-form-item",
        props: {
            value: Object,
        },
        components: {
            ...componentList
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>