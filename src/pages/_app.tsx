import '@/styles/globals.css'
import StrapiApolloProvider from 'graphql/apollo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <StrapiApolloProvider><Component {...pageProps} /></StrapiApolloProvider>
}
