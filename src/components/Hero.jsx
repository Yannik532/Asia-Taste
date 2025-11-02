import aussenImage from '../aussen.png'
import heroBgImage from '../hero.png'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      style={{
        backgroundColor: '#8A8A8A',
      }}
    >
      {/* Gespiegeltes Hintergrundbild */}
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
      {/* Linienmuster */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23000000' stroke-width='1' opacity='0.25'/%3E%3Cpath d='M0 50l100 0M50 0l0 100' stroke='%23000000' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Asia Taste –<br />
              <span className="text-asia-green">Dein Asia-Markt</span><br />
              & Kiosk in Kamen
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Ramen-To-Go, Snacks, Getränke & vieles mehr
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://maps.google.com/?q=Willy-Brandt-Platz+7,+59174+Kamen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl transform border-2 border-green-800/20"
              >
                Route starten
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-asia-beige to-green-50 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:from-green-50 hover:to-asia-beige transition-all hover:scale-105 shadow-lg hover:shadow-xl transform border-2 border-green-300"
              >
                Instagram ansehen
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div 
              className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${aussenImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '400px',
              }}
            >
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      </div>
    </section>
  )
}

export default Hero

