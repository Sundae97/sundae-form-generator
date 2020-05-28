<template>
    <el-row>
        <draggable :list="vComponents"
                   :group="{ name: 'formGroup', pull: 'clone', put: false }"
                   :animation="400"
                   :sort="false"
                   :clone="onCloneHandler">
            <el-col :span="10" class="component-item" v-for="(item, index) in vComponents" :key="index">
                <i class="el-icon-apple"/>
                {{item.componentName}}
            </el-col>
        </draggable>
    </el-row>
</template>

<script>
    import draggable from "vuedraggable";
    import {vComponents} from "@/components/generator/vComponents"
    import {vComponentOptions} from "@/components/generator/vComponentOptions";

    export default {
        name: "LeftBoard",
        components: {
            draggable,
        },
        data() {
            return {
                vComponents
            };
        },
        methods: {
            onCloneHandler(item) {
                return {
                    ...item,
                    options: vComponentOptions[item.tag]()
                }
            }
        }

    }
</script>

<style>
    .component-item {
        cursor: move;
        height: 32px;
        padding: 6px;
        margin: 3px;
        border-width: 2px;
        border-color: #cccccc;
        border-style: dashed;
        text-align: left;
    }
</style>
