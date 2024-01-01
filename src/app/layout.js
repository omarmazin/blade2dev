import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blade2dev',
  description: 'فريق متخصص قائم على تحويل فكرتك الى تصميم ومن ثم الى واقع ليمكنك مواكبة التطور العالمي والمنافسة بأحترافية ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl'>
      <body className={inter.className}><Navbar />{children}</body>
    </html>
  )
}
