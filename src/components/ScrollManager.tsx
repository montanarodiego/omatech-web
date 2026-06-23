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
const TITLES: Record<string, string> = {
  '/': 'OMA tech — Hardware industrial y software para empresas',
  '/pos': 'OmaTech POS — Punto de venta para comercios | OMA tech',
  '/vanderbus': 'VanderBus Logística — Gestión de distribución | OMA tech',
}

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  // Título del documento por ruta (SEO + compartir enlaces)
  useEffect(() => {
    document.title = TITLES[pathname] ?? 'Página no encontrada — OMA tech'
  }, [pathname])

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
