import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/globals.css'
import './gestion-vuelos-a/page.module.css'
import './gestion-vuelos-a/main.css'
import './gestion-vuelos-a/components/flight/flight.css'
import './gestion-vuelos-a/components/nav/nav.css'
import './gestion-vuelos-a/components/sidebar/sidebar.css'
import './gestion-vuelos-a/components/user/navUser.css'
import './gestion-vuelos-a/consultar/QueryStyle.css'
import './gestion-vuelos-a/consultar/page.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
