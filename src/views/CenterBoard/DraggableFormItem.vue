<script>
    import draggable from 'vuedraggable'
    const layouts = {
        colFormItem(h){
            return `<el-from-item></el-from-item>`
        }
    }

    export default {
        components: {
            draggable
        },
        render(h) {
            return h
        }
    }
</script>
