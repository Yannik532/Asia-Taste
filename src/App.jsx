import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load components below the fold
const Features = lazy(() => import('./components/Features'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CTABanner = lazy(() => import('./components/CTABanner'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <Features />
          <Testimonials />
          <CTABanner />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

