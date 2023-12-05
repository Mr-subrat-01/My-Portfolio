import Background from '@/Layouts/Background'
import './globals.css'
import Header from '@/Layouts/Header'

export const metadata = {
  title: 'Mr. Subrat - OK',
  description: 'Portfolio by Mr. Subrat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Background />
        {children}
      </body>
    </html>
  )
}
