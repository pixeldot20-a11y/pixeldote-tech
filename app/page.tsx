'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Phone, 
  Star, 
  Clock, 
  Settings, 
  Award, 
  MapPin, 
  Tag, 
  ArrowRight
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white selection:bg-[#3bb0b6] selection:text-white">
      
      {/* HEADER & HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex flex-col">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80" 
            alt="CCTV Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/80"></div>
        </div>

        {/* Navigation */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 bg-white rounded-full p-1 flex items-center justify-center">
                <img src="/logo.png" alt="Pixeldote Tech Logo" className="object-contain h-10 w-10" />
              </div>
              <span className="text-white font-bold text-lg tracking-wider">Pixeldote Tech.</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
              <Link href="/" className="hover:text-cyan-400 transition">HOME</Link>
              <Link href="/services" className="hover:text-cyan-400 transition flex items-center gap-1">SERVICES <span className="text-[10px]">▼</span></Link>
              <Link href="/about" className="hover:text-cyan-400 transition">ABOUT</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition">CONTACT</Link>
              <Link href="/blog" className="hover:text-cyan-400 transition">BLOG</Link>
              <Link href="/shop" className="hover:text-cyan-400 transition">SHOP ONLINE</Link>
            </div>

            {/* Top Right Contact */}
            <div className="text-right text-white">
              <div className="text-xs text-white/70">Have any questions?</div>
              <a href="tel:+919576022221" className="text-lg font-bold hover:text-cyan-400 transition">
                +91-9576022221
              </a>
            </div>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="text-white font-bold tracking-widest text-sm mb-4 uppercase text-cyan-400">
              08+ Years of Experience • Network Simplified
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart IT Solutions for a Connected Future
            </h1>
            <p className="text-lg text-white/80 mb-10 border-l-2 border-[#3bb0b6] pl-4">
              Your Trusted Partner for System Integration & IT Infrastructure in Patna, Bihar.
            </p>
            
            <a href="tel:+919576022221" className="inline-flex items-center gap-4 bg-transparent border-t border-white/20 pt-6 group">
              <div className="bg-[#3bb0b6] p-4 rounded-full group-hover:bg-[#2c888d] transition">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white/80 text-sm">Call Us Today:</div>
                <div className="text-white text-2xl font-bold">+91-9576022221</div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT & NUMBERS SPLIT SECTION */}
      <section className="flex flex-col md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#eef8f9] flex-1 py-20 px-8 lg:px-20 flex justify-end"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Pixeldote Tech – Smart IT Solutions for a Connected Future
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              At Pixeldote Tech, we help businesses, corporate offices, and residential properties stay secure and efficient through advanced CCTV surveillance, structured LAN networking, and custom system integration. Our certified engineers deliver clean cable management and robust hardware infrastructure designed to eliminate downtime completely.
            </p>
            <Link href="/about" className="text-[#3bb0b6] font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:text-[#2c888d]">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#3bb0b6] flex-1 py-20 px-8 lg:px-20 text-white flex items-center"
        >
          <div className="max-w-xl w-full">
            <div className="text-sm font-bold tracking-widest uppercase mb-12">
              Proven Track Record in Patna
            </div>
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
              <div>
                <div className="text-6xl font-bold mb-2">8+</div>
                <div className="text-lg font-medium">Years in Business</div>
              </div>
              <div>
                <div className="text-6xl font-bold mb-2">1000+</div>
                <div className="text-lg font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            End-to-end technology implementation ensuring your security hardware, network cabling, and office software work together seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { title: "CCTV Surveillance Sales & Service", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80", desc: "High-definition IP cameras, CP Plus DVR/NVR setups, and remote mobile viewing configured for 24/7 crystal-clear monitoring." },
            { title: "LAN Networking & Cabling", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80", desc: "Structured CAT6 cabling, secure server rack installations, and gigabit switch configurations that eliminate slow speeds and network drops." },
            { title: "Biometric Attendance & Intercoms", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80", desc: "Automated workforce attendance tracking units and multi-line EPABX switchboards for seamless office communication." }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg shadow-sm">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
              <Link href="/services" className="text-[#3bb0b6] font-bold text-sm inline-flex items-center gap-1 hover:underline">
                Explore Service Details <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center border-t border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            Customized security and networking architectures tailored to the specific security demands of every sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {[
            { title: "Corporate Offices", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
            { title: "Retail Stores", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
            { title: "Manufacturing Units", img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80" },
            { title: "Homes & Apartments", img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80" },
            { title: "Schools & Colleges", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" },
            { title: "Hospitals & Clinics", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-56 w-full mb-4 overflow-hidden bg-slate-100 rounded-lg">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="relative py-24 px-6 text-white text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0f172a]/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-sm font-bold tracking-widest uppercase mb-4 text-[#3bb0b6]">Why Choose Us</div>
          <h2 className="text-4xl font-bold mb-16">What Sets Us Apart</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10 text-center">
            {[
              { icon: <Star className="w-10 h-10 text-[#3bb0b6] mx-auto mb-4" />, title: "Experienced Professionals", desc: "Skilled engineers and system integrators with years of hands-on field experience." },
              { icon: <Clock className="w-10 h-10 text-[#3bb0b6] mx-auto mb-4" />, title: "Reliable Support", desc: "Dedicated maintenance schedules and prompt technical assistance whenever you need it." },
              { icon: <Settings className="w-10 h-10 text-[#3bb0b6] mx-auto mb-4" />, title: "Tailored Solutions", desc: "We design every network and security layout around your exact operational budget and space." },
              { icon: <Award className="w-10 h-10 text-[#3bb0b6] mx-auto mb-4" />, title: "Quality Hardware", desc: "Top-tier CP Plus equipment, robust cables, and dependable server enclosures." },
              { icon: <MapPin className="w-10 h-10 text-[#3bb0b6] mx-auto mb-4" />, title: "Local Patna Expertise", desc: "Headquartered in Rajeev Nagar with rapid on-site dispatch across Patna and Bihar." },
              { icon: <Tag className="w-10 h-10 text-[#3bb0b6] mx-auto mb-4" />, title: "Transparent Pricing", desc: "Clear, cost-effective wholesale and retail packages with zero hidden overheads." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-10 border-b border-r border-white/10 hover:bg-white/5 transition"
              >
                {feature.icon}
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-sm font-bold tracking-widest uppercase text-[#3bb0b6] mb-2">Verified Feedback</div>
            <h2 className="text-4xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <Link href="/about" className="text-[#3bb0b6] font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:text-[#2c888d]">
            View More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { quote: "The experience was too good with the people of the firm. Really appreciate it. Thank you for your service.", name: "HIMANSHU SINGH", source: "Google Reviewer" },
            { quote: "Best CCTV customer service in Patna. Highly recommended... Go for it! 👏🏼👏🏼👏🏼", name: "DELIGHTED BAKERY", source: "Google Reviewer" },
            { quote: "Liked the service. It was quick and perfect in all ways. Installed Camera and its working perfectly well. Price is also the best from the market.", name: "AS U WISH", source: "Google Reviewer" }
          ].map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <p className="text-slate-600 font-medium leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-bold text-slate-900 tracking-wide">{t.name}</div>
              <div className="text-[#3bb0b6] text-sm font-semibold">{t.source}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT / REQUEST INFO SECTION */}
      <section className="flex flex-col md:flex-row">
        <div className="bg-[#eef8f9] flex-1 py-24 px-8 lg:px-20 flex justify-end items-center">
          <div className="max-w-md w-full">
            <div className="text-sm font-bold tracking-widest uppercase text-[#3bb0b6] mb-2">Book a Site Survey</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Request Info</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Ready to secure your premises or upgrade your network infrastructure? Contact our engineering team in Rajeev Nagar, Patna for prompt assistance and accurate quotations.
            </p>
            <div className="font-bold text-slate-900">+91-9576022221 / 9006653313</div>
          </div>
        </div>
        <div className="bg-white flex-1 py-24 px-8 lg:px-20 flex justify-start border-t border-slate-100 md:border-none">
          <form className="max-w-md w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Full name" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-[#3bb0b6] transition rounded" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" placeholder="Mobile number" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-[#3bb0b6] transition rounded" />
            </div>
            <button className="bg-[#3bb0b6] hover:bg-[#2c888d] text-white font-bold py-4 px-8 w-full transition mt-4 rounded shadow-md">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e1e24] text-white pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative h-8 w-8 bg-white rounded-full p-1 flex items-center justify-center">
                <img src="/logo.png" alt="Pixeldote Logo" className="object-contain h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Pixeldote Tech.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Smart IT Solutions for a Connected Future. Network Simplified. Your Trusted Partner for System Integration & IT Infrastructure in Patna.
            </p>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/services" className="hover:text-white transition">CCTV Sales & Service</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Intercom & EPABX Systems</Link></li>
              <li><Link href="/services" className="hover:text-white transition">LAN Networking & Cabling</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Biometric Attendance Systems</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Address Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Address</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Road 14/A, Rajeev Nagar, Patna - 800024, Bihar</li>
              <li>info@pixeldote.in</li>
              <li>+91-9576022221 / 9006653313</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div>Copyright © 2026 pixeldote.in — All Rights Reserved</div>
          <div>Powered by pixeldote.in</div>
        </div>
      </footer>

    </div>
  )
}