import '@/styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"
import Layout from '@/components/Layouts/RootLayout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}
