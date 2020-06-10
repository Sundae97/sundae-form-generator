<template>
    <el-form label-width="80px">
        <el-form-item label="字段名">
            <el-input v-model="options.fieldName"/>
        </el-form-item>
        <el-form-item label="标题">
            <el-input v-model="options.label"/>
        </el-form-item>
        <el-form-item label="栅格">
            <el-slider v-model="options.span" :min="1" :max="24"/>
        </el-form-item>
        <el-form-item label="是否必填">
            <el-row>
                <el-col :span="6">
                    <el-switch v-model="options.required"/>
                </el-col>
                <el-col :span="16" v-show="options.required">
                    <el-input v-model="options.requiredMessage"></el-input>
                </el-col>
            </el-row>
        </el-form-item>
        <el-divider>正则校验</el-divider>
        <el-divider>自定义校验</el-divider>
        <el-divider>接口校验</el-divider>
    </el-form>
</template>

<script>
    export default {
        name: 'VElInputConfig',
        props: {
            options: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>

<style scoped>

</style>
