import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Top Header */}
      <div className="bg-[#0f172a] text-white py-4 px-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center">
            <img src="/logo.png" alt="Pixeldote Logo" className="object-contain h-8 w-8" />
          </div>
          <span className="text-lg font-bold">Pixeldote Tech.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <Link href="/" className="hover:text-cyan-400 transition">HOME</Link>
          <Link href="/services" className="hover:text-cyan-400 transition">SERVICES</Link>
          <Link href="/about" className="text-cyan-400 transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">CONTACT</Link>
          <Link href="/blog" className="hover:text-cyan-400 transition">BLOG</Link>
          <Link href="/shop" className="hover:text-cyan-400 transition">SHOP ONLINE</Link>
        </div>
        <a href="tel:+919576022221" className="text-sm font-bold text-cyan-400">+91-9576022221</a>
      </div>

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#3bb0b6] text-xs font-bold tracking-widest uppercase mb-3 block">Established Excellence</span>
          <h1 className="text-4xl sm:text-6xl font-black mb-6">About Pixeldote Tech</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Your Trusted Partner for System Integration & IT Infrastructure in Patna, Bihar. Network Simplified.
          </p>
        </div>
      </div>

      {/* Story & Mission */}
      <div className="max-w-5xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Simplifying Complex Technology for Growing Businesses</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Headquartered at Road 14/A, Rajeev Nagar, Patna, Pixeldote Tech was founded with a singular mission: to provide bulletproof IT infrastructure and advanced surveillance solutions that local businesses can depend on 24/7.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Whether you operate a corporate office, a retail chain, a manufacturing unit, or a residential complex, our certified engineers deliver clean cable management, top-tier hardware, and zero-lag networks.
          </p>
          <div className="space-y-3 font-semibold text-slate-800">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#3bb0b6] w-5 h-5" /> Over 8+ Years of On-Ground Experience</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#3bb0b6] w-5 h-5" /> 1000+ Satisfied Customers Across Bihar</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#3bb0b6] w-5 h-5" /> Prompt On-Site Support & Maintenance</div>
          </div>
        </div>

        <div className="bg-[#eef8f9] p-10 rounded-3xl border border-[#3bb0b6]/20">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Our Core Values</h3>
          <ul className="space-y-6 text-slate-700">
            <div>
              <strong className="text-slate-900 block text-lg mb-1">Reliability First</strong>
              <p className="text-sm text-slate-600">We install robust hardware configurations designed to prevent system downtime completely.</p>
            </div>
            <div>
              <strong className="text-slate-900 block text-lg mb-1">Transparent Pricing</strong>
              <p className="text-sm text-slate-600">Cost-effective packages with no hidden fees or vendor lock-ins.</p>
            </div>
            <div>
              <strong className="text-slate-900 block text-lg mb-1">Local Expertise</strong>
              <p className="text-sm text-slate-600">Deep roots in Patna with rapid deployment and emergency on-site assistance.</p>
            </div>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e1e24] text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 bg-white rounded-full p-1 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="object-contain h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Pixeldote Tech.</span>
            </div>
            <p className="text-white/70 text-sm">Network Simplified. Trusted Partner for IT Infrastructure in Patna.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Road 14/A, Rajeev Nagar, Patna-800024</li>
              <li>info@pixeldote.in</li>
              <li>+91-9576022221 / 9006653313</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Official Website</h4>
            <p className="text-sm text-white/70">www.pixeldote.in</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 text-center text-sm text-white/50">
          Copyright © 2026 pixeldote.in — All Rights Reserved
        </div>
      </footer>

    </div>
  )
}