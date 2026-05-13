import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaaS Invoice Reconciler — Catch Billing Errors Automatically',
  description: 'Connect to SaaS APIs, track real usage, and automatically reconcile with invoices to catch overcharges and billing errors.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fb54f054-3d33-4891-bc63-49f7d73efd00"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
