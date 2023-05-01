import { ChakraProvider } from '@chakra-ui/react'
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import theme from 'src/styles/themes/theme'
import Meta from 'src/components/Meta'

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={manrope.className}>
        <Meta />
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}
export default MyApp
