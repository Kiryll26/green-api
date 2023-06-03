import 'styled-components'

import { BaseTheme } from 'shared/configs/theme'

declare module 'styled-components' {
    export interface DefaultTheme extends BaseTheme {}
}
