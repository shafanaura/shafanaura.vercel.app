import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
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
          textColor: colorTheme.brandBlack[900],
          bgColor: 'blackAlpha.50',
        },
      },
    },
  },
  { config },
  withDefaultColorScheme({ colorScheme: 'brandBlack' })
)

export default theme
