'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'products' | 'blogs'>('products')
  
  // Product Form State
  const [productName, setProductName] = useState('')
  const [productDesc, setProductDesc] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productStock, setProductStock] = useState('')
  const [productImage, setProductImage] = useState('')
  const [productMsg, setProductMsg] = useState('')

  // Blog Form State
  const [blogTitle, setBlogTitle] = useState('')
  const [blogSlug, setBlogSlug] = useState('')
  const [blogExcerpt, setBlogExcerpt] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [blogMsg, setBlogMsg] = useState('')

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    setProductMsg('Saving product...')
    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: productName,
          description: productDesc,
          price: parseFloat(productPrice),
          stock: parseInt(productStock || '0'),
          image: productImage || '/logo.png'
        })
      })
      if (res.ok) {
        setProductMsg('Product added successfully!')
        setProductName('')
        setProductDesc('')
        setProductPrice('')
        setProductStock('')
        setProductImage('')
      } else {
        setProductMsg('Failed to save product.')
      }
    } catch (err) {
      setProductMsg('Error connecting to server.')
    }
  }

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    setBlogMsg('Publishing post...')
    try {
      const res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogTitle,
          slug: blogSlug,
          excerpt: blogExcerpt,
          content: blogContent
        })
      })
      if (res.ok) {
        setBlogMsg('Blog post published successfully!')
        setBlogTitle('')
        setBlogSlug('')
        setBlogExcerpt('')
        setBlogContent('')
      } else {
        setBlogMsg('Failed to publish post.')
      }
    } catch (err) {
      setBlogMsg('Error connecting to server.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-[#0f172a] text-white py-4 px-8 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-1 h-8 w-8 flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="h-6 w-6 object-contain" />
          </div>
          <span className="font-bold text-lg">Pixeldote Admin Panel</span>
        </div>
        <Link href="/" className="text-sm font-medium text-cyan-400 hover:underline">← Back to Website</Link>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* Tab Switcher */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 rounded-xl font-bold transition ${activeTab === 'products' ? 'bg-[#3bb0b6] text-white shadow' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}
          >
            Manage Shop Products
          </button>
          <button 
            onClick={() => setActiveTab('blogs')}
            className={`px-6 py-3 rounded-xl font-bold transition ${activeTab === 'blogs' ? 'bg-[#3bb0b6] text-white shadow' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}
          >
            Manage Blog Posts
          </button>
        </div>

        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Add New Shop Product</h2>
            {productMsg && <div className="mb-4 p-3 bg-cyan-50 text-cyan-800 rounded-lg text-sm font-semibold">{productMsg}</div>}
            <form onSubmit={handleCreateProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Product Name</label>
                <input type="text" value={productName} onChange={e => setProductName(e.target.value)} required placeholder="e.g. CP Plus 2.4MP Outdoor Bullet Camera" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Description</label>
                <textarea value={productDesc} onChange={e => setProductDesc(e.target.value)} required rows={3} placeholder="Technical specifications and features..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Image URL / Filename</label>
                <input type="text" value={productImage} onChange={e => setProductImage(e.target.value)} placeholder="e.g. https://images.unsplash.com/... or /camera.png" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Price (₹)</label>
                  <input type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} required placeholder="2499" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Stock Quantity</label>
                  <input type="number" value={productStock} onChange={e => setProductStock(e.target.value)} placeholder="10" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#3bb0b6] hover:bg-[#2c888d] text-white font-bold py-4 rounded-xl transition shadow">
                Save Product to Database
              </button>
            </form>
          </div>
        )}

        {/* BLOGS TAB */}
        {activeTab === 'blogs' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Publish New Blog Post</h2>
            {blogMsg && <div className="mb-4 p-3 bg-cyan-50 text-cyan-800 rounded-lg text-sm font-semibold">{blogMsg}</div>}
            <form onSubmit={handleCreateBlog} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Post Title</label>
                <input type="text" value={blogTitle} onChange={e => setBlogTitle(e.target.value)} required placeholder="e.g. Best Security Practices for Offices" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">URL Slug</label>
                <input type="text" value={blogSlug} onChange={e => setBlogSlug(e.target.value)} required placeholder="e.g. best-security-practices" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Short Excerpt</label>
                <input type="text" value={blogExcerpt} onChange={e => setBlogExcerpt(e.target.value)} placeholder="Brief summary for card preview..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Full Content</label>
                <textarea value={blogContent} onChange={e => setBlogContent(e.target.value)} required rows={6} placeholder="Write your full article text here..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#3bb0b6]" />
              </div>
              <button type="submit" className="w-full bg-[#3bb0b6] hover:bg-[#2c888d] text-white font-bold py-4 rounded-xl transition shadow">
                Publish Blog Post
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}