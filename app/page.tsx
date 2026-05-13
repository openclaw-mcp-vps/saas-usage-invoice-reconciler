export default function Home() {
  const faqs = [
    {
      q: 'Which SaaS tools do you support?',
      a: 'We connect to Slack, GitHub, Figma, Notion, Zoom, and more. New integrations are added monthly based on customer demand.'
    },
    {
      q: 'How does invoice reconciliation work?',
      a: 'Upload your invoices (PDF or CSV) and we use OCR and pattern matching to extract line items, then compare them against actual usage data pulled from each SaaS API.'
    },
    {
      q: 'What if I find a discrepancy?',
      a: 'The dashboard flags overcharges and unused seats with a detailed breakdown. You get an exportable report ready to send to your vendor for a credit or refund.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Finance &amp; Billing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Overpaying for SaaS.<br />
          <span className="text-[#58a6ff]">Reconcile Invoices Automatically.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your SaaS tools, upload invoices, and let us catch every overcharge, phantom seat, and billing error — before it costs you another month.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Reconciling — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-8">
          {[['$2,400', 'Avg. annual savings found'], ['94%', 'Discrepancy detection rate'], ['5 min', 'Setup time per integration']].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop billing leaks</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited SaaS integrations',
              'Automated invoice OCR parsing',
              'Real-time usage vs. billing dashboard',
              'Overcharge &amp; unused seat alerts',
              'Exportable discrepancy reports',
              'Email digest every billing cycle'
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} SaaS Invoice Reconciler. All rights reserved.
      </footer>
    </main>
  )
}
