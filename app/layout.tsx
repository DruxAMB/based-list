import "./globals.css"
import { Inter } from "next/font/google"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import type { Metadata, Viewport } from "next"
import { Toaster } from "sonner"
import { DockWrapper } from "./components/DockWrapper"
import { Footer } from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: "#0052FF",
}

export const metadata: Metadata = {
  title: "Based List",
  description: "A directory of people building on Base",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Based List",
    statusBarStyle: "default",
    capable: true,
  },
  openGraph: {
    title: "Based List",
    description: "A directory of people building on Base",
    url: "https://basedlist.xyz",
    siteName: "Based List",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Based List - A directory of people building on Base",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Based List",
    description: "A directory of people building on Base",
    images: ["/og-image.png"],
    creator: "@navigate_ai",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased bg-[#fafafa] text-[#393939] min-h-screen flex flex-col`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16 fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-sm">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          <DockWrapper />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}