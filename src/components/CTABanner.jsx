import ctaImage from '../cta.png'

const CTABanner = () => {
  return (
    <section 
      className="py-32 md:py-40 relative overflow-hidden border-t-4 border-b-4 border-gray-800"
      style={{
        backgroundImage: `url(${ctaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay für bessere Text-Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Lust auf Ramen?
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-semibold">
          Komm vorbei!
        </p>
        
        <div className="mb-8">
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Täglich frisch zubereitet – perfekt für unterwegs oder zum Genießen vor Ort
          </p>
        </div>

        {/* Öffnungszeiten */}
        <div className="bg-green-50/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-green-300/60 max-w-md mx-auto mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Öffnungszeiten</span>
          </h3>
          <div className="space-y-3 text-gray-800">
            <div className="flex justify-between items-center">
              <span className="font-medium">Montag – Samstag</span>
              <span className="font-semibold text-green-700">09:00 – 22:00 Uhr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Sonntag</span>
              <span className="font-semibold text-gray-500">Geschlossen</span>
            </div>
            <div className="pt-3 mt-3 border-t border-green-300/40">
              <p className="text-sm text-gray-700 text-center mb-2">
                <span className="font-semibold">Eröffnung:</span> 27. Oktober 2025
              </p>
              <p className="text-xs text-gray-600 text-center italic">
                Stand: Eröffnung. Aktuelle Öffnungszeiten auf Instagram
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 text-center font-extrabold leading-relaxed mb-3">
            Euer Lieblingsessen nicht dabei?
          </h3>
          <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
            Dann schreibt uns einfach auf Instagram –<br className="hidden md:block" />
            entweder direkt hier über den Button<br className="hidden md:block" />
            oder unten über den QR-Code!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://maps.google.com/?q=Willy-Brandt-Platz+7,+59174+Kamen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-green-600 transition-all hover:scale-110 shadow-2xl hover:shadow-2xl transform duration-300 inline-block border-0"
          >
            Route starten
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-110 shadow-xl hover:shadow-2xl transform duration-300 inline-block border-2 border-gray-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTABanner

