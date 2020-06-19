<template>
    <el-form>
        <draggable
                class="components-list"
                :list="formComponents"
                :animation="340"
                group="formGroup"
                :sort="true"
        >
            <el-col
                    v-for="(item, index) in formComponents"
                    :key="index"
                    :span="item.options.span"
                    @click.native="onSelectedItem(item)"
            >
                <!--        <draggableItem :item="item">-->
                <!--        </draggableItem>-->
                <el-form-item
                        class="components-item"
                        :label="item.options.label"
                        :label-width="item.options.labelWidth"
                        :required="item.options.required"
                >
                    <component :is="item.tag" :options="item.options"/>
                </el-form-item>
            </el-col>
        </draggable>
    </el-form>
</template>

<script>
    import {vComponentOptions} from "@/components/Generator/vComponentOptions";
    import draggable from 'vuedraggable'
    import draggableItem from './DraggableFormItem'

    export default {
        name: 'CenterBoard',
        components: {
            draggable,
            draggableItem
        },
        data() {
            let formConfig = JSON.parse(JSON.stringify(vComponentOptions["v-el-form"]()))
            let formComponents = []
            formConfig.formComponents = formComponents
            return {
                formConfig: formConfig,
                formComponents: formComponents
            }
        },
        mounted() {
            this.$store.commit('formConfig', this.formConfig)
        },
        watch: {
            formConfig: {
                handler(val){
                    console.log('change')
                    this.$store.commit('formConfig', val)
                },
                deep: true
            }
        },
        methods: {
            onSelectedItem(item) {
                console.log(item)
                this.$store.commit('selectedItem', item)
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
    }

    .components-item {
        cursor: move;
        padding: 6px;
        margin: 2px 6px;
        border-width: 2px;
        border-color: #cccccc;
        border-style: dashed;
    }
</style>
