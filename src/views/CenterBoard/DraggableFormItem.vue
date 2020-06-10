<script>
    import draggable from 'vuedraggable'

    const layouts = {
        colFormItem(h, item) {
            const formItemComponentTag = item.tag;
            return (
                <el-form-item label={item.options.label} required={item.options.required}
                label-width={item.options.labelWidth}>
                    <formItemComponentTag></formItemComponentTag>
                </el-form-item>
            )
        }
    }

    export default {
        components: {
            draggable
        },
        props: {
          item: Object
        },
        render(h) {
            return layouts.colFormItem(h, this.item)
        }
    }
</script>
