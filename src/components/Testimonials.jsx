import { memo } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import heroBgImage from '../hero.png'

const Testimonials = memo(() => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    rootMargin: '100px',
    disconnectAfterIntersect: false,
  })
  const sortiment = [
    {
      title: 'Frische Ramen',
      color: 'from-green-500 to-green-600',
      items: [
        'Ramen zum Vor-Ort-Verzehr',
        'Ramen to-go',
        'Verschiedene Geschmacksrichtungen',
        'Frische Zutaten'
      ]
    },
    {
      title: 'Asiatische Lebensmittel',
      color: 'from-amber-500 to-amber-600',
      items: [
        'Reis (verschiedene Sorten)',
        'Nudeln & Pasta',
        'Gewürze & Saucen',
        'Tiefkühlprodukte',
        'Konserven',
        'Öle & Essige',
        'Fertiggerichte'
      ]
    },
    {
      title: 'Kiosk & Snacks',
      color: 'from-orange-400 to-orange-500',
      items: [
        'Mochi & Süßwaren',
        'Ramune & asiatische Getränke',
        'Chips & Snacks',
        'Japanische Süßigkeiten',
        'Kekse & Gebäck',
        'Erfrischungsgetränke'
      ]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-20 relative"
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
              Unser Sortiment
            </h2>
            <p className="text-xl text-gray-600">
              Eine vielfältige Auswahl asiatischer Produkte
            </p>
          </div>

          {/* Sortiment als moderne Karten */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {sortiment.map((category, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Moderne Karte mit Rahmen */}
                <div className="bg-green-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-green-300/60 hover:border-green-500/80 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                  {/* Überschrift mit Akzent */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <div className="h-1.5 w-full bg-amber-900 rounded-full"></div>
                  </div>
                  
                  {/* Items als Liste */}
                  <ul className="space-y-3 flex-grow">
                    {category.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-700 group/item"
                      >
                        <svg className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base md:text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

Testimonials.displayName = 'Testimonials'

export default Testimonials
