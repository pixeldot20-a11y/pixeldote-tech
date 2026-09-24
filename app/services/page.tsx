import Link from 'next/link'
import { Shield, Network, Cpu, Wrench, CheckCircle2, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Header */}
      <div className="bg-[#0f172a] text-white py-4 px-6 flex justify-between items-center border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center">
            <img src="/logo.png" alt="Pixeldote Logo" className="object-contain h-8 w-8" />
          </div>
          <span className="text-lg font-bold">Pixeldote Tech.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <Link href="/" className="hover:text-cyan-400 transition">HOME</Link>
          <Link href="/services" className="text-cyan-400 transition">SERVICES</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">CONTACT</Link>
          <Link href="/blog" className="hover:text-cyan-400 transition">BLOG</Link>
          <Link href="/shop" className="hover:text-cyan-400 transition">SHOP ONLINE</Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#0f172a] text-white py-24 px-6 text-center">
        <span className="text-[#3bb0b6] text-xs font-bold tracking-widest uppercase mb-3 block">Professional Solutions</span>
        <h1 className="text-4xl sm:text-5xl font-black mb-4">Enterprise Security & Networking Services</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Network Simplified. We deliver robust surveillance, high-speed routing, and IT infrastructure setup across Patna and Bihar.</p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Service 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">CCTV & Surveillance Systems</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                End-to-end installation of CP Plus DVRs, AHD audio cameras, IP surveillance networks, and remote mobile monitoring configuration via gCMOB apps. Protect your home, office, or industrial space with crystal-clear 24/7 security.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> HD & 4K Night Vision Camera Setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> DVR / NVR Configuration & Hard Drive Expansion</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Mobile App Setup (gCMOB) for Remote Live Viewing</li>
              </ul>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#3bb0b6] font-bold hover:text-cyan-700 transition">
              Inquire About CCTV Installation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] mb-6">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Enterprise Networking & Wi-Fi</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Designing high-performance wired and wireless networks for commercial buildings, offices, and educational institutions. We eliminate dead zones and secure data flow across your organization.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Structured LAN Cabling & Patch Panel Setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> High-Speed Enterprise Wi-Fi Access Points</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Router & Managed Switch Configuration</li>
              </ul>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#3bb0b6] font-bold hover:text-cyan-700 transition">
              Book Networking Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] mb-6">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">IT Infrastructure & Hardware</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive hardware procurement, server rack assembly, power backup integration, and workstation maintenance to keep your business operations running without interruption.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Server & Rack Management</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> UPS & Power Backup Solutions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Hardware Troubleshooting & Upgrades</li>
              </ul>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#3bb0b6] font-bold hover:text-cyan-700 transition">
              Get Infrastructure Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service 4 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] mb-6">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">AMC & Annual Maintenance</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Preventive maintenance contracts ensuring your security cameras, networks, and IT assets receive regular health checks, firmware updates, and rapid on-site support in Patna.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Periodic On-Site System Inspections</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Priority Emergency Breakdown Support</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#3bb0b6]" /> Lens Cleaning & Cable Realignment</li>
              </ul>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#3bb0b6] font-bold hover:text-cyan-700 transition">
              Request AMC Quotation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e1e24] text-white pt-16 pb-8 px-6 mt-20">
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