import { useState, useRef, useEffect, memo } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
// Import images - Vite will handle optimization, but we'll lazy load via CSS
import regalImage from '../regal.png'
import togoImage from '../togo.png'
import drinksImage from '../drinks.png'
import stuffImage from '../stuff.png'
import taImage from '../ta.png'
import ta1Image from '../ta1.png'

const Features = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [touchStartY, setTouchStartY] = useState(null)
  const [openImage, setOpenImage] = useState(null)
  const [flippedCards, setFlippedCards] = useState({})
  const [shouldLoadBackground, setShouldLoadBackground] = useState(false)
  const scrollContainerRef = useRef(null)

  // Intersection Observer for lazy loading background image
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    rootMargin: '100px',
    disconnectAfterIntersect: false,
  })

  // Load background when section becomes visible
  useEffect(() => {
    if (isSectionVisible) {
      setShouldLoadBackground(true)
    }
  }, [isSectionVisible])

  // Mindestdistanz für Swipe-Geste (in Pixel)
  const minSwipeDistance = 50

  const features = [
    {
      icon: '🍜',
      title: 'Frische Ramen–to–go',
      description: 'Täglich frisch zubereitet – perfekt für unterwegs oder zum Genießen vor Ort.',
      color: 'from-asia-green to-green-600',
      image: togoImage
    },
    {
      icon: '🥤',
      title: 'Drinks & Süßes',
      description: 'Ramune, Mochi u. v. m. – authentische japanische und asiatische Snacks und Getränke.',
      color: 'from-green-400 to-asia-green',
      image: drinksImage
    },
    {
      icon: '🛒',
      title: 'Auswahl an asiatischen Alltagsprodukten',
      description: 'Von Reis bis Gewürze – alles was du für die asiatische Küche brauchst.',
      color: 'from-asia-beige to-green-400',
      image: stuffImage
    }
  ]

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setTouchStart(null)
      setTouchEnd(null)
      setTouchStartY(null)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // Nur wenn es wirklich ein Swipe war, navigiere durch die Cards
    if (isLeftSwipe && currentIndex < features.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
    
    // Kurze Verzögerung, damit onClick nicht getriggert wird wenn es ein Swipe war
    setTimeout(() => {
      setTouchStart(null)
      setTouchEnd(null)
      setTouchStartY(null)
    }, 100)
  }


  // Scroll zu aktueller Karte bei Index-Änderung
  useEffect(() => {
    if (scrollContainerRef.current) {
      // Berechne die Scroll-Position basierend auf Card-Breite und Abstand
      const cardWidth = window.innerWidth - 3 * 16 // 3rem = 48px total padding
      const gap = 1.5 * 16 // 1.5rem gap
      const scrollPosition = currentIndex * (cardWidth + gap)
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  // Aktualisiere currentIndex beim Scrollen mit passive listener
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const cardWidth = window.innerWidth - 3 * 16 // Card-Breite
      const gap = 1.5 * 16 // Gap zwischen Cards
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / (cardWidth + gap))
      
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < features.length) {
        setCurrentIndex(newIndex)
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [currentIndex, features.length])

  // ESC-Taste zum Schließen des Modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && openImage) {
        setOpenImage(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [openImage])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-20 relative overflow-hidden border-t-4 border-b-4 border-gray-800"
      style={{
        ...(shouldLoadBackground ? {
          backgroundImage: `url(${regalImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        } : {
          backgroundColor: '#f5f5dc'
        })
      }}
    >
      {/* Overlay für bessere Text-Lesbarkeit */}
      <div className="absolute inset-0 bg-white/50"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Was dich bei uns erwartet:
          </h2>
        </div>

        {/* Mobile: Swipbarer Container mit mehr Abstand */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-20 gap-6 px-4"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            touchAction: 'pan-x pinch-zoom' // Erlaube nur horizontales Scrollen
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative h-80 cursor-pointer perspective-1000 group flex-shrink-0 snap-center"
              style={{ 
                width: 'calc(100vw - 3rem)',
                minWidth: 'calc(100vw - 3rem)',
                marginRight: '1.5rem'
              }}
            >
              {/* Card Container mit 3D Flip - Mobile: per Klick, Desktop: per Hover */}
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards[index] ? 'rotate-y-180 scale-105' : ''
                } md:group-hover:rotate-y-180 md:group-hover:scale-105`}
                onClick={(e) => {
                  // Nur auf Mobile: Klick zum Umdrehen
                  // Prüfe, ob es wirklich nur ein Klick war (kein Swipe)
                  const wasSwipe = touchStart && touchEnd && Math.abs(touchStart - touchEnd) > minSwipeDistance
                  if (window.innerWidth < 768 && !wasSwipe) {
                    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }))
                  }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Vorderseite - Nur Bild */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl shadow-lg overflow-hidden"
                  style={{
                    ...(feature.image ? {
                      backgroundImage: `url(${feature.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    } : {
                      backgroundColor: '#e5e5e5'
                    })
                  }}
                >
                </div>

                {/* Rückseite - Text */}
                <div
                  className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-lg overflow-hidden bg-asia-beige"
                >
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Line */}
                    <div className={`mt-8 h-3 bg-gradient-to-r ${feature.color} rounded-full shadow-md`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel Indikatoren */}
        <div className="md:hidden flex justify-center gap-2 mb-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-asia-green' 
                  : 'w-2 h-2 bg-gray-400'
              }`}
              aria-label={`Zu Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative h-80 cursor-pointer perspective-1000 group"
            >
              {/* Card Container mit 3D Flip */}
              <div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 group-hover:scale-105"
              >
                {/* Vorderseite - Nur Bild */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl shadow-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                </div>

                {/* Rückseite - Text */}
                <div
                  className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-lg overflow-hidden bg-asia-beige"
                >
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Line */}
                    <div className={`mt-8 h-3 bg-gradient-to-r ${feature.color} rounded-full shadow-md`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Über uns Bereich */}
        <div className="max-w-7xl mx-auto mt-32 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Über uns
            </h2>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </div>
          </div>

          {/* Info-Texte über das Unternehmen */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 px-4 md:px-8 max-w-5xl mx-auto">
            <div className="space-y-6 py-8 px-6 md:px-10 rounded-2xl border-2 border-green-300/60 hover:border-green-400/80 transition-colors duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
                Frisch eröffnet
              </h3>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center max-w-md mx-auto">
                Seit dem <span className="font-bold text-green-700">27. Oktober 2025</span> kannst du bei uns einkaufen – und wir freuen uns riesig darauf, dich zu begrüßen! Hier findest du alles, was dein asiatisches Foodie-Herz höher schlagen lässt. Komm vorbei und entdecke unser vielfältiges Sortiment – von Ramen bis Ramune, hier wird jeder fündig!
              </p>
              <div className="mt-8 flex justify-center">
                <img 
                  src={ta1Image} 
                  alt="Asia Taste" 
                  className="max-w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setOpenImage('ta1')}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="space-y-6 py-8 px-6 md:px-10 rounded-2xl border-2 border-green-300/60 hover:border-green-400/80 transition-colors duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
                Ein Traum wird wahr
              </h3>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center max-w-md mx-auto">
                Was für andere nur ein Traum ist, haben wir endlich verwirklicht! Jahre voller Leidenschaft, Planung und Engagement stecken in diesem besonderen Ort mitten in Kamen. Jetzt musst du nicht mehr weit fahren, um authentische asiatische Aromen und Produkte zu entdecken!
              </p>
              <div className="mt-20 flex justify-center">
                <img 
                  src={taImage} 
                  alt="Asia Taste" 
                  className="max-w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setOpenImage('ta')}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Lightbox Modal für die Bilder */}
      {openImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpenImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setOpenImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              aria-label="Schließen"
            >
              ×
            </button>
            <img 
              src={openImage === 'ta1' ? ta1Image : taImage} 
              alt="Asia Taste" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
})

Features.displayName = 'Features'

export default Features
