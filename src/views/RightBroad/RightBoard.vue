<template>
    <div style="padding: 8px;">
        <component v-if="selectedItem != null" :is="selectedItem.tag" :options="selectedItem.options"></component>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {vComponents} from '@/components/generator/vComponents'

    const configPanelComponents = {}
    vComponents.forEach(item => {
        configPanelComponents[item.tag] = item.configPanelComponent
    })
    export default {
        name: "RightBoard",
        components: {
            ...configPanelComponents
        },
        computed: {
            ...mapState(['selectedItem'])
        }
    }
</script>

<style scoped>

</style>