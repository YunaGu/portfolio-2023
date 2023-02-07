import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// import '@/styles/tailwind.css'
// import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="flex flex-col h-screen">
      <Header />
      <div className="grow flex flex-col"><Component previousPathname={previousPathname} {...pageProps} /></div>
      <Footer />
    </div>
    </>
  )
}
