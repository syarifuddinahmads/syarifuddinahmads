import theme from "@/utils/theme"
import { ThemeProvider, CssBaseline, Container } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { NextPage } from "next"
import { AppProps } from "next/app"
import React, { ReactElement, ReactNode } from "react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="md">
                    {getLayout(<Component {...pageProps} />)}
                </Container>
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}