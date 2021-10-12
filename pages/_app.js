import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { Router } from 'next/router'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  return (
    <Layout>
      {loading ? <LoadingSpinner /> : <Component {...pageProps} />}
    </Layout>
  )
}

export default MyApp
