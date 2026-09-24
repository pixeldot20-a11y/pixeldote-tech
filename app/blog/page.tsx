import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { BookOpen } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  // Fetch blog posts live from your SQLite database
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: 'desc' }
  })

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
          <Link href="/about" className="hover:text-cyan-400 transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">CONTACT</Link>
          <Link href="/blog" className="text-cyan-400 transition">BLOG</Link>
          <Link href="/shop" className="hover:text-cyan-400 transition">SHOP ONLINE</Link>
        </div>
        <a href="tel:+919576022221" className="text-sm font-bold text-cyan-400">+91-9576022221</a>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <span className="text-[#3bb0b6] text-xs font-bold tracking-widest uppercase mb-3 block">Expert Knowledge Base</span>
        <h1 className="text-4xl sm:text-5xl font-black mb-4">Tech Insights & Articles</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Practical guides published directly from your custom admin dashboard.</p>
      </div>

      {/* Blog Feed */}
      <div className="max-w-5xl mx-auto py-24 px-6">
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Articles Published Yet</h3>
            <p className="text-slate-600 mb-6">Log in to your admin panel to publish your first post.</p>
            <Link href="/admin" className="bg-[#3bb0b6] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#2c888d] transition">
              Go to Admin Panel
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-[#3bb0b6] uppercase tracking-wider mb-2 block">
                  {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">{post.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{post.excerpt || post.content.substring(0, 160) + '...'}</p>
                <div className="text-slate-400 text-xs font-semibold">Published by Pixeldote Tech</div>
              </div>
            ))}
          </div>
        )}
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