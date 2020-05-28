<template>
    <el-col :span="12">
        <el-form-item :label="options.label" :label-width="options.labelWidth">
            <component :is="tag" :options="options" />
        </el-form-item>
    </el-col>
</template>

<script>
    export default {
        name: "v-form-item",
        props: {
            tag: String,
            component: Function,
            options: Object
        },
        components: {
        },
        created() {
            this.$options.components[this.tag] = this.component;
        },
    }
</script>

<style scoped>

</style>