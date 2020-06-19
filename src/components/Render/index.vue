<script>

    function renderForm(h){
        console.log(h);
        const { formConfigCopy } = this
        return (
            <el-form form={formConfigCopy.form}>

            </el-form>
        )
    }

    export default {
        props: {
            formConfig: {
                type: Object,
                required: true,
            }
        },
        data() {
            const data = {
                form: {

                },
                formConfigCopy: JSON.parse(JSON.stringify(this.formConfig)),
            }
            return data
        },
        mounted() {
            console.log("Parser")
        },
        render(h) {
            return renderForm.call(this, h);
        }
    }
</script>
