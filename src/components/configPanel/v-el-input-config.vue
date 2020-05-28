<template>
    <el-form>
        <el-form-item label="标题">
            <el-input v-model="options.label"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "v-el-input-config",
        props: {
            options: Object
        }
    }
</script>

<style scoped>

</style>