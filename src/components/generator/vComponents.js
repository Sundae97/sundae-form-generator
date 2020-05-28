export const vComponents = [
    {
        componentName: "按钮",
        tag: "v-el-button",
        component: () => import("@/components/generator/v-el-button"),
        configPanelComponent: () => import("@/components/configPanel/v-el-button-config"),
    },
    {
        componentName: "输入框",
        tag: "v-el-input",
        component: () => import("@/components/generator/v-el-input"),
        configPanelComponent: () => import("@/components/configPanel/v-el-input-config"),
    },
    {
        componentName: "开关",
        tag: "v-el-switch",
        component: () => import("@/components/generator/v-el-switch"),
        configPanelComponent: () => import("@/components/configPanel/v-el-switch-config"),
    }
]
