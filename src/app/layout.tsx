import 'src/styles/global.css'
import 'leaflet/dist/leaflet.css'
import Footer from '../components/footer'
import Topbar from '../components/topbar/Topbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    images: ['/og_image.jpg', '/og_image_2.jpg'],
    url: 'https://www.draneusapresa.com.br',
    type: 'website',
    title: 'Dra. Neusa Presa | Viva o melhor da vida!',
  },
  title: 'Dra. Neusa Presa | Viva o melhor da vida!',
  description:
    'Medicina preventiva, estilo de vida e ginecologia para você criar a sua melhor versão.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
