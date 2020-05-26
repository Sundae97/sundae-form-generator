export const vComponents = [
    {
        componentName: "按钮",
        tag: "v-el-button",
        component: () => import("@/components/generator/v-el-button"),
    },
    {
        componentName: "输入框",
        tag: "v-el-input",
        component: () => import("@/components/generator/v-el-input"),
    }
]
