import "@/styles/global.css";
import Footer from '../components/footer'
import Topbar from '../components/topbar/Topbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draneusapresa.com.br'),
  openGraph: {
    locale: 'pt_BR',
    images: '/og_image.jpg',
    url: 'https://www.draneusapresa.com.br',
    type: 'website',
    title: 'Dra. Neusa Presa | Viva o melhor da vida!',
  },

keywords: ["medicina preventiva", "ginecologia", "estilo de vida", "saúde da mulher", "saúde", "bem-estar", "prevenção", "hormônios", "menopausa", "emagrecimento", "medicina integrativa", "medicina funcional", "medicina preventiva", "medicina personalizada", "medicina de estilo de vida", "medicina da mulher", "menopausa", "ginecologia", "obesidade", "emagrecimento", "hormônios", "maringa", "neusa", "parana"],
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
    <html lang="pt-BR">
      <body>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
