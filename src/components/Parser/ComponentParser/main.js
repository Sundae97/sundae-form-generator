import {parser as VElInputParser} from './v-el-input-parser'
import {parser as VElSwitchParser} from './v-el-switch-parser'
import {parser as VElButtonParser} from './v-el-input-parser'


export const componentParsers = {
    'v-el-input': VElInputParser,
    'v-el-switch': VElSwitchParser,
    'v-el-button': VElButtonParser,
}
