import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll behaviour on navigation.
 * - With a hash (e.g. "/#contacto"): smooth-scroll to that element once it's mounted.
 * - Without a hash: jump to the top of the page.
 *
 * Implemented with useEffect + useLocation because <ScrollRestoration /> only works
 * with a data router (createBrowserRouter), not the <BrowserRouter> shell used here.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists after a route change.
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
