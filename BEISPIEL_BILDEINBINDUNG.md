# 📸 Beispiel: Hintergrundbilder einbinden

## Schritt 1: Bilder in den public-Ordner legen

Erstelle einen `public`-Ordner im Root-Verzeichnis und lege dort deine Bilder ab:

```
asia-taste/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── features-bg.jpg
│   │   └── cta-banner-bg.jpg
```

---

## Schritt 2: Bilder in Komponenten einbinden

### Hero Section mit Hintergrundbild:

```jsx
const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay für bessere Text-Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-br from-asia-beige/80 via-white/70 to-green-50/80"></div>
      
      {/* Rest des Inhalts */}
      <div className="relative z-10">
        {/* ... */}
      </div>
    </section>
  )
}
```

### Oder mit Tailwind-Klassen:

```jsx
<section 
  className="relative pt-20 bg-cover bg-center bg-no-repeat"
  style={{backgroundImage: 'url(/images/hero-bg.jpg)'}}
>
  <div className="absolute inset-0 bg-asia-beige/70"></div>
  <div className="relative z-10">
    {/* Inhalt */}
  </div>
</section>
```

### Responsive Bilder mit unterschiedlichen Größen:

```jsx
<section className="relative">
  {/* Mobile */}
  <div 
    className="md:hidden absolute inset-0 bg-cover bg-center"
    style={{backgroundImage: 'url(/images/hero-bg-mobile.jpg)'}}
  ></div>
  
  {/* Desktop */}
  <div 
    className="hidden md:block absolute inset-0 bg-cover bg-center"
    style={{backgroundImage: 'url(/images/hero-bg-desktop.jpg)'}}
  ></div>
  
  <div className="relative z-10">
    {/* Inhalt */}
  </div>
</section>
```

---

## Schritt 3: Overlay für Text-Lesbarkeit

**Wichtig**: Hintergrundbilder sollten einen semi-transparenten Overlay haben, damit Text lesbar bleibt:

```jsx
{/* Dunkler Overlay für CTA Banner */}
<div className="absolute inset-0 bg-black/40"></div>

{/* Farbiger Overlay für Hero */}
<div className="absolute inset-0 bg-asia-beige/60"></div>

{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-asia-green/50"></div>
```

---

## Empfohlene Implementierung für deine Website

1. **Hero**: Subtiles Hintergrundbild + Overlay
2. **Features**: Optional (derzeit besser ohne)
3. **Testimonials**: Optional (derzeit besser ohne)
4. **CTA Banner**: Appetitliches Bild + dunkler Overlay

**Tipp**: Starte mit dem Hero-Bild und teste, ob es gut aussieht. Die anderen Bereiche funktionieren auch gut mit Farben/Gradients.


