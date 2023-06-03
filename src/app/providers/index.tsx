import { compose } from 'hoc-compose'
import { withRouter } from './withRouter'
import { withTheme } from './withTheme'
import { withLoading } from './withLoading'

export const withProviders = compose(withTheme, withRouter, withLoading)
