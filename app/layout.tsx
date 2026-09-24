import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pixeldote Tech | Network Simplified",
  description: "CCTV, IT Infrastructure, and Networking Solutions in Patna",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#060a12] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  )
}