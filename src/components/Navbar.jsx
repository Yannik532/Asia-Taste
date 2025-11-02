import { useState, useEffect } from 'react'
import logoImage from '../test.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ESC-Taste zum Schließen des Logo-Modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isLogoModalOpen) {
        setIsLogoModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isLogoModalOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-800 shadow-lg border-b-2 border-gray-700' : 'bg-gray-800/95 backdrop-blur-sm border-b border-gray-700/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div 
                className="w-[72px] h-[72px] rounded-full bg-white p-0.5 flex items-center justify-center shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setIsLogoModalOpen(true)}
              >
                <img 
                  src={logoImage} 
                  alt="Asia Taste Logo" 
                  className="w-full h-full rounded-full object-cover scale-110 ml-3.5"
                />
              </div>
              <a href="#home" className="text-2xl md:text-3xl font-bold text-green-500 hover:text-green-400 transition-colors">
                Asia Taste
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-200 hover:text-white transition-colors font-medium">
              Angebot
            </a>
            <a href="#testimonials" className="text-gray-200 hover:text-white transition-colors font-medium">
              Sortiment
            </a>
            <a href="#contact" className="text-gray-200 hover:text-white transition-colors font-medium">
              Kontakt
            </a>
            <a
              href="https://maps.google.com/?q=Willy-Brandt-Platz+7,+59174+Kamen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all hover:scale-105 border border-green-800/20 shadow-md"
            >
              Route starten
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2 border-t">
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
            >
              Angebot
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
            >
              Sortiment
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
            >
              Kontakt
            </a>
            <a
              href="https://maps.google.com/?q=Willy-Brandt-Platz+7,+59174+Kamen"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold text-center hover:from-green-700 hover:to-green-800 transition-colors border border-green-800/20 shadow-md"
            >
              Route starten
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal für das Logo */}
      {isLogoModalOpen && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsLogoModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsLogoModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              aria-label="Schließen"
            >
              ×
            </button>
            <img 
              src={logoImage} 
              alt="Asia Taste Logo" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

