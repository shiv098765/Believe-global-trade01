import { react, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './assets/bgt-logo-new.png'
import { Instagram, Facebook, Twitter, FileText, Package, Globe, Ship, Wrench, Shirt, ArrowRight, X, Menu } from 'lucide-react'
import parcelImage from './assets/bgt-parcel.jpeg'
import Hero from './pages/hero.jsx'
import AboutUs from './pages/about.jsx'
import Feedback from './pages/feedback.jsx'
import Products from './pages/products.jsx'
import Footer from './components/Footer.jsx'

function ServicesModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>

      {/* Header______________________________________________________________ */}
     
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 rounded-full bg-gray-900 hover:bg-gray-700 hover:scale-110 transition-colors z-60"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="flex">
              <div className="flex-1 p-8 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Import Solutions</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <Package className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Import Services</p>
                        <p className="text-sm text-gray-500">Streamlined import logistics and compliance.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <FileText className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Customs Feedback</p>
                        <p className="text-sm text-gray-500">Expert guidance for smooth clearance.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <Globe className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Product Sourcing</p>
                        <p className="text-sm text-gray-500">Global sourcing for quality products.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Export Solutions</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <Ship className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Export Services</p>
                        <p className="text-sm text-gray-500">Efficient export management worldwide.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <FileText className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Documentation</p>
                        <p className="text-sm text-gray-500">Accurate paperwork for every shipment.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <Globe className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Market Access</p>
                        <p className="text-sm text-gray-500">Expand reach to new markets.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Industries</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <Package className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Agriculture</p>
                        <p className="text-sm text-gray-500">Reliable supply of agri-products.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <Wrench className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Machinery</p>
                        <p className="text-sm text-gray-500">Industrial equipment for every need.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 cursor-pointer group">
                      <Shirt className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600">Textiles</p>
                        <p className="text-sm text-gray-500">Quality fabrics and garments.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-72 bg-black text-white p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold leading-tight">Connecting markets.<br/>Delivering trust.</h2>
                  <button className="mt-6 text-sm font-medium flex items-center gap-2 hover:gap-3 hover:scale-110 transition-all">
                    Contact <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <img 
                  src={parcelImage} 
                  alt="Parcel" 
                  className="absolute bottom-0 right-0 w-70 h-48 object-cover opacity-80"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function MenuModal({ isOpen, onClose, setServicesOpen }) {
  if (!isOpen) return null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-2xl z-[10000] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div className="space-y-4 mt-8">
          <button className="block w-full text-left py-2 hover:bg-gray-100 rounded font-semibold border-b border-gray-200" onClick={ scrollToTop }>Home</button>
          <button onClick={() => { setServicesOpen(true); onClose(); }} className="block w-full text-left py-2 hover:bg-gray-100 rounded font-semibold border-b border-gray-200">Services</button>
          <button className="block w-full text-left py-2 hover:bg-gray-100 rounded font-semibold border-b border-gray-200" onClick={() => { document.getElementById('products').scrollIntoView({behavior: 'smooth'}); onClose(); }}>Products</button>
          <button className="block w-full text-left py-2 hover:bg-gray-100 rounded font-semibold border-b border-gray-200" onClick={() => { document.getElementById('about').scrollIntoView({behavior: 'smooth'}); onClose(); }}>About Us</button>
          <button className="block w-full text-left py-2 hover:bg-gray-100 rounded font-semibold border-b border-gray-200" onClick={() => { document.getElementById('feedback').scrollIntoView({behavior: 'smooth'}); onClose(); }}>Feedback</button>
          <button className="block w-full text-left py-2 hover:bg-gray-100 rounded font-semibold">Contact Us</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [clickedOpen, setClickedOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMouseEnter = () => {
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    if (!clickedOpen) {
      setServicesOpen(false)
    }
  }

  const handleClick = () => {
    setServicesOpen(true)
    setClickedOpen(true)
  }

  const handleClose = () => {
    setServicesOpen(false)
    setClickedOpen(false)
  }
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


    return (
    <motion.div className='bg-transparent h-screen'>
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.3), transparent 50%)',
          backgroundSize: '100% 100%, 100% 100%, 100% 100%'
        }}
        animate={{
          backgroundPosition: ['0% 0%, 0% 0%, 0% 0%', '100% 100%, 100% 100%, 100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div className='fixed top-0 w-full z-9999'
       initial={{ opacity: 0 }} animate={{ opacity: 1 }} duration={3}>
        <div className='flex justify-between items-center bg-white/80 backdrop-blur-sm px-4'>
          <img src={Logo} alt="Logo" className='h-18 w-20'/>
          
          <div className="hidden md:flex gap-6">
            <button className='bg-transparent text-gray-700 font-medium cursor-pointer hover:underline' onClick={scrollToTop}>Home</button>
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-gray-700 font-medium cursor-pointer hover:text-indigo-600 transition-colors flex items-center gap-1"
                onClick={handleClick}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ServicesModal isOpen={servicesOpen} onClose={handleClose} />
            </div>
            <button className='bg-transparent text-gray-700 font-medium cursor-pointer hover:underline' onClick={() => document.getElementById('products').scrollIntoView({behavior: 'smooth'})}>Products</button>
            <button className='bg-transparent text-gray-700 font-medium cursor-pointer hover:underline' onClick={() => document.getElementById('feedback').scrollIntoView({behavior: 'smooth'})}>Feedback</button>
            <button className='bg-transparent text-gray-700 font-medium cursor-pointer hover:underline' onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>About Us</button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="p-2 text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
        <button className="hidden md:block px-3 py-2 sm:px-4 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base" onClick={() => document.getElementById('footer').scrollIntoView({behavior: 'smooth'})}>
          Contact Us
        </button>
        </div>
      </motion.div>
      
  {/* Body______________________________________________________________ */}
      
      <main className="">
        <Hero />
        <Products />
        <AboutUs />
        <Feedback />

      </main>

      <Footer />

      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} setServicesOpen={setServicesOpen} />
    </motion.div>
  )
}

export default App
