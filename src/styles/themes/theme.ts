import { color, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { colorTheme } from './colors/color'
import buttonTheme from './components/button'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme(
  {
    colors: colorTheme,
    components: { Button: buttonTheme },
    styles: {
      global: {
        body: {
          bgColor: 'blackAlpha.50',
        },
        p: {
          color: 'blackAlpha.800',
        },
      },
    },
  },
  { config },
  withDefaultColorScheme({ colorScheme: 'brandBlack' })
)

export default theme
