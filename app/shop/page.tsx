'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, X, Trash2 } from 'lucide-react'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string | null
  stock: number
}

interface CartItem extends Product {
  quantity: number
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  // Checkout Form State
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        if (data.success) {
          setProducts(data.products)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) return

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          phone: customerPhone,
          totalAmount,
          items: cart
        })
      })
      const data = await res.json()
      if (data.success) {
        // Construct pre-filled WhatsApp order message
        const orderItemsSummary = cart.map(i => `- ${i.name} (Qty: ${i.quantity})`).join('%0A')
        const whatsappMessage = `*New Order from Pixeldote Tech Website!*%0A%0A*Customer:* ${customerName}%0A*Phone:* ${customerPhone}%0A%0A*Items:*%0A${orderItemsSummary}%0A%0A*Total Amount:* ₹${totalAmount}%0A%0APlease confirm my order.`
        
        // Trigger WhatsApp window with order details
        window.open(`https://wa.me/919576022221?text=${whatsappMessage}`, '_blank')

        setOrderPlaced(true)
        setCart([])
      }
    } catch (err) {
      alert('Error placing order. Please try calling us directly at +91-9576022221.')
    }
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
          <Link href="/contact" className="hover:text-cyan-400 transition">CONTACT</Link>
          <Link href="/blog" className="hover:text-cyan-400 transition">BLOG</Link>
          <Link href="/shop" className="text-cyan-400 transition">SHOP ONLINE</Link>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative bg-[#3bb0b6] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-[#2c888d] transition"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#0f172a] text-white py-20 px-6 text-center">
        <span className="text-[#3bb0b6] text-xs font-bold tracking-widest uppercase mb-3 block">Direct Hardware Store</span>
        <h1 className="text-4xl sm:text-5xl font-black mb-4">Shop Security & IT Hardware</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Enterprise surveillance cameras, switches, and network accessories with instant cart ordering.</p>
      </div>

      {/* Product Catalog Grid */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        {loading ? (
          <div className="text-center py-20 text-slate-500 font-semibold">Loading catalog inventory...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Products in Inventory Yet</h3>
            <p className="text-slate-600 mb-6">Log in to your admin dashboard to add your first camera or hardware item.</p>
            <Link href="/admin" className="bg-[#3bb0b6] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#2c888d] transition">
              Go to Admin Panel
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="h-52 bg-white rounded-2xl mb-6 overflow-hidden border border-slate-100 flex items-center justify-center p-4">
                    <img 
                      src={product.image || '/logo.png'} 
                      alt={product.name} 
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{product.description}</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-black text-[#0f172a]">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">
                      Stock: {product.stock}
                    </span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-[#3bb0b6] hover:bg-[#2c888d] text-white font-bold py-3 rounded-xl transition shadow"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SHOPPING CART SLIDE-OVER DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-[#3bb0b6]" /> Your Cart
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-slate-400 hover:text-slate-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {orderPlaced ? (
                <div className="text-center py-16">
                  <div className="text-green-600 font-bold text-2xl mb-2">Order Received! 🎉</div>
                  <p className="text-slate-600 text-sm mb-6">WhatsApp has opened with your invoice details to send to our team at Patna.</p>
                  <button onClick={() => { setOrderPlaced(false); setIsCartOpen(false); }} className="bg-[#3bb0b6] text-white font-bold py-3 px-6 rounded-xl">
                    Continue Shopping
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-20 text-slate-500">Your cart is empty.</div>
              ) : (
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                        <div className="text-xs text-slate-500">Qty: {item.quantity} × ₹{item.price}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">₹{item.price * item.quantity}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!orderPlaced && cart.length > 0 && (
              <div className="border-t pt-6">
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total Amount:</span>
                  <span className="text-[#3bb0b6]">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input type="text" required value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="Full Name" className="w-full bg-slate-50 border rounded-xl px-4 py-2 text-sm outline-none focus:border-[#3bb0b6]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input type="tel" required value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} placeholder="9576022221" className="w-full bg-slate-50 border rounded-xl px-4 py-2 text-sm outline-none focus:border-[#3bb0b6]" />
                  </div>
                  <button type="submit" className="w-full bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition shadow">
                    Place Order via WhatsApp
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

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