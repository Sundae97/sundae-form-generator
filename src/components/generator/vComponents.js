export const vComponents = [
    {
        componentName: "按钮",
        config: {
            tag: "v-el-button",
            component: import("@/components/generator/v-el-button"),
        }
    },
    {
        componentName: "输入框",
        config: {
            tag: "v-el-input",
            component: import("@/components/generator/v-el-input"),
        }
    },
    {
        componentName: "开关",
        tag: "v-el-switch",
        config: {
            tag: "v-el-switch",
            component: import("@/components/generator/v-el-switch"),
        }
    }
]
