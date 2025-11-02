import { memo } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import heroBgImage from '../hero.png'
import { QRCodeSVG } from 'qrcode.react'

const Contact = memo(() => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    rootMargin: '100px',
    disconnectAfterIntersect: false,
  })

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: '#8A8A8A',
      }}
    >
      {/* Gespiegeltes Hintergrundbild */}
      {isSectionVisible && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'scaleX(-1)',
            opacity: '0.7',
          }}
        ></div>
      )}
      {/* Linienmuster */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23000000' stroke-width='1' opacity='0.25'/%3E%3Cpath d='M0 50l100 0M50 0l0 100' stroke='%23000000' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Besuche uns
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Komm vorbei oder finde uns auf der Karte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Linke Spalte: Adresse */}
            <div>
              {/* Adresse */}
              <div className="bg-gradient-to-br from-green-50 to-white backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Adresse</span>
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-lg">Asia Taste</p>
                  <p>Willy-Brandt-Platz 7</p>
                  <p>59174 Kamen</p>
                  <p>Deutschland</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Willy-Brandt-Platz+7,+59174+Kamen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  <span>Auf Google Maps anzeigen</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>

            {/* Mittlere Spalte: Google Maps */}
            <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl">
              <div className="relative w-full h-full min-h-[450px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.123456789012!2d7.664444444444445!3d51.59333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM1JzM2LjAiTiA3wrAzOSc1Mi4wIkU!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Asia Taste"
                  className="absolute inset-0 rounded-lg"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=Willy-Brandt-Platz+7,+59174+Kamen"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-all hover:scale-105 shadow-md"
              >
                Route starten
              </a>
            </div>

            {/* Rechte Spalte: Instagram QR-Code */}
            <div className="flex items-start justify-center">
              <div className="bg-gradient-to-br from-green-50 to-white backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                    <QRCodeSVG 
                      value="https://www.instagram.com/asia_taste_kamen/"
                      size={160}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-sm font-semibold text-gray-900">
                      Scan für direkten Zugang zu unserem Instagram
                    </p>
                    <p className="text-xs text-gray-600">
                      oder bei Fragen einfach hier melden
                    </p>
                    <a
                      href="https://www.instagram.com/asia_taste_kamen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-green-600 hover:text-green-700 font-semibold transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Zum Instagram-Account</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'

export default Contact
