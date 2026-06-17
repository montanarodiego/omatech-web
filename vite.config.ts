import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base '/' is required for SPA routing on a root custom domain (CNAME: omatech.digital).
// A relative base ('./') would break deep routes like /pos because asset URLs would
// resolve relative to the route path.
//
// Note: Vite's dev server already serves index.html for unknown routes (appType: 'spa'),
// so /pos and /vanderbus work in dev without any extra "historyApiFallback" option
// (that option belongs to webpack-dev-server, not Vite).
export default defineConfig({
  plugins: [react()],
  base: '/',
})
