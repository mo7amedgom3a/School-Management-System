// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Franklin } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'


const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})
const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm_plex_sans',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable + ' ' + ibm_plex_sans.variable}>
        {children}
      </body>
    </html>
  )
}