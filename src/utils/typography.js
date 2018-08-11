import Typography from 'typography'
import Sutro from 'typography-theme-sutro'

Sutro.headerLineHeight = 1.1
Sutro.baseFontSize = '18px'
Sutro.overrideThemeStyles = ({ rhythm }, options) => {
  return {
    'h1,h2,h3': {
      marginTop: rhythm(1),
      marginBottom: rhythm(1/4),
      lineHeight: 1.4,
    },
    p: {
      marginBottom: rhythm(1),
      lineHeight: 1.78,
    },
    a: {
      color: `rgb(0,0,0)`,
    },
  }
}

const typography = new Typography(Sutro)

export default typography
