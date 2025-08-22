import Navbar from "@/components/Navbar"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Geist, Geist_Mono } from "next/font/google"
import Footer from "@/components/Footer"
import { ToastContainer } from "react-toastify"
import NextAuthProvider from "@/Providers/NextAuthProvider";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata = {
  title: "Next App",
  description: "Created with Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider>
          <ThemeProvider>
            <Navbar></Navbar>
            <ToastContainer />
            {children}
            <Footer></Footer>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
