/** @jsx jsx */
import { jsx } from '@emotion/core'
import { withTheme } from 'emotion-theming'
import { Spinner as BootstrapSpinner } from 'reactstrap'
import { styles } from './styles'

const Spinner = ({
  border = '2px',
  color = 'primary',
  ...props
}: {
  color?: string
  border?: string
  size?: string
  type?: string
  className?: string
  style?: Object
  theme: Object
}) => (
  <BootstrapSpinner
    color={color}
    {...props}
    css={styles(props.theme, border)}
  />
)

export default withTheme(Spinner)
