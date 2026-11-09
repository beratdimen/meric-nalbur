
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Meriç Nalbur | Yapı & Nalburiye',
  description:
    'Yapı, nalburiye, boya, seramik, tadilat ve ısı yalıtımı çözümleri. Meriç Nalbur ile projeniz emin ellerde.',
  generator: 'v0.app',
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
