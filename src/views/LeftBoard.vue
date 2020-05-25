<template>
    <el-row>
        <draggable :list="componentsResourceList" group="test" :animation="400" :sort="true">
            <el-col :span="10" class="component-item" v-for="item in componentsResourceList" :key="item.key">
                {{item.name}}
            </el-col>
        </draggable>
    </el-row>
</template>

<script>
    import draggable from "vuedraggable";

    export default {
        name: "LeftBoard",
        components: {
            draggable
        },
        data() {
            return {
                componentsResourceList: [
                    {key: 1, name: "111"},
                    {key: 2, name: "222"},
                    {key: 3, name: "333"},
                    {key: 4, name: "444"},
                    {key: 5, name: "555"},
                ],
            };
        }

    }
</script>

<style scoped>

</style>