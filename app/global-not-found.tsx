// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Image from 'next/image'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className='px-2 flex flex-col items-center justify-center h-screen gap-4'>
        <h2 className='text-2xl'>Page Not Found</h2>
        <Image src="/images/not-found.png" alt="404" width={300} height={300} priority={true} title='404' className='rounded-md'/>
      </body>
    </html>
  )
}