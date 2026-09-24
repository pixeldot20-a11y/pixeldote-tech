'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open WhatsApp with direct inquiry message
    const waText = `*Inquiry from Pixeldote Tech Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`
    window.open(`https://wa.me/919576022221?text=${waText}`, '_blank')
    setSubmitted(true)
  }

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
          <Link href="/services" className="hover:text-cyan-400 transition">SERVICES</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">ABOUT</Link>
          <Link href="/contact" className="text-cyan-400 transition">CONTACT</Link>
          <Link href="/blog" className="hover:text-cyan-400 transition">BLOG</Link>
          <Link href="/shop" className="hover:text-cyan-400 transition">SHOP ONLINE</Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#0f172a] text-white py-20 px-6 text-center">
        <span className="text-[#3bb0b6] text-xs font-bold tracking-widest uppercase mb-3 block">Get In Touch</span>
        <h1 className="text-4xl sm:text-5xl font-black mb-4">Contact Our Patna Office</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Have questions about CCTV installation or network solutions? Reach out to our technical team today.</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black mb-4 text-[#0f172a]">Pixeldote Tech.</h2>
              <p className="text-slate-600 leading-relaxed">
                Network Simplified. Your trusted enterprise partner for CCTV surveillance, IT infrastructure, and structured networking solutions in Bihar.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Office Address</h4>
                  <p className="text-slate-600 text-sm">Road 14/A, Rajeev Nagar, Patna-800024, Bihar</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Numbers</h4>
                  <p className="text-slate-600 text-sm">+91-9576022221 / 9006653313</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] shrink-0 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600 text-sm">info@pixeldote.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-[#3bb0b6] shrink-0 mt-1">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Official Website</h4>
                  <p className="text-slate-600 text-sm">www.pixeldote.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h3>
            
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Prepared!</h4>
                <p className="text-slate-600 mb-6">WhatsApp has opened with your inquiry to send directly to our team.</p>
                <button onClick={() => setSubmitted(false)} className="bg-[#3bb0b6] text-white font-bold py-3 px-6 rounded-xl">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Full Name" 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3bb0b6]" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                    placeholder="9576022221" 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3bb0b6]" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Your Message / Requirement *</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    placeholder="Tell us about your CCTV or networking requirements..." 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3bb0b6]" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#3bb0b6] hover:bg-[#2c888d] text-white font-bold py-4 rounded-xl transition shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message via WhatsApp
                </button>
              </form>
            )}
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