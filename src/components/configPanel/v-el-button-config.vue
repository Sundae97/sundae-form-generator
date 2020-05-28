<template>
    <el-form label-width="70px">
        <el-form-item label="标题">
            <el-input v-model="options.label"></el-input>
        </el-form-item>
        <el-form-item label="文本">
            <el-input v-model="options.text"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "v-el-button-config",
        props: {
            options: Object
        }
    }
</script>

<style scoped>

</style>