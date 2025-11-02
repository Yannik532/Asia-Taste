# 📐 Bildgrößen-Guide für Asia Taste Website

## Empfohlene Bildgrößen für Hintergrundbilder

### 🎯 Allgemeine Empfehlungen
- **Format**: JPG oder WebP (WebP für bessere Kompression)
- **Qualität**: 80-90% für JPG
- **Responsive**: Erstelle Bilder in 2-3 Größen (Mobile, Tablet, Desktop)
- **Aspect Ratio**: Beibehalten für konsistentes Design

---

## 📱 1. Hero Section (Hauptbereich oben)

**Desktop (Standard)**
- **Größe**: 1920 × 1080 px (Full HD)
- **Alternativ**: 2560 × 1440 px (für Retina/4K Displays)
- **Aspect Ratio**: 16:9 (Landscape)
- **Bereich**: Vollbild, bedeckt den gesamten oberen Bereich
- **Hinweis**: Wichtigster Bereich! Text liegt darüber, daher sollte das Bild nicht zu aufdringlich sein
- **Empfehlung**: Ramen-Schüssel, asiatische Zutaten, Markt-Atmosphäre (unscharfer Hintergrund für Text-Lesbarkeit)

**Tablet**
- **Größe**: 1280 × 720 px
- **Aspect Ratio**: 16:9

**Mobile**
- **Größe**: 768 × 1024 px (Portrait) oder 1024 × 768 px (Landscape)
- **Aspect Ratio**: 4:3 oder 3:4

**CSS Verwendung**:
```css
background-image: url('hero-bg.jpg');
background-size: cover;
background-position: center;
```

---

## 🍜 2. Features Section

**Option A: Vollständiges Hintergrundbild**
- **Desktop**: 1920 × 800 px
- **Tablet**: 1280 × 600 px
- **Mobile**: 768 × 600 px
- **Aspect Ratio**: 2.4:1 (breites Panorama)
- **Tipp**: Dezent, damit die Feature-Karten gut sichtbar sind

**Option B: Subtiles Textur-Bild (empfohlen)**
- **Größe**: 1920 × 1080 px (kann wiederholt werden)
- **Format**: PNG mit Transparenz oder JPG mit niedriger Opacity
- **Empfehlung**: Asiatische Muster, Bambus-Textur, subtile Strukturen

---

## 💬 3. Testimonials Section

**Hintergrundbild (optional)**
- **Desktop**: 1920 × 700 px
- **Tablet**: 1280 × 500 px
- **Mobile**: 768 × 600 px
- **Aspect Ratio**: 2.7:1
- **Empfehlung**: Sehr dezent oder gar kein Hintergrundbild (weiß/beige ist schöner)
- **Alternative**: Nur subtile Textur oder Muster

---

## 🎯 4. CTA Banner (Call-to-Action Bereich)

**Hintergrundbild**
- **Desktop**: 1920 × 600 px
- **Tablet**: 1280 × 500 px
- **Mobile**: 768 × 500 px
- **Aspect Ratio**: 3.2:1 (sehr breit)
- **Empfehlung**: Appetitliches Bild (Ramen, Snacks) mit Overlay für Text-Lesbarkeit
- **Wichtig**: Dunkler Overlay (30-50% Opacity) damit weißer Text lesbar bleibt

**Alternative**: Farbe/Gradient (aktuell grün) - kein Bild nötig

---

## 🎨 5. Feature-Card Hintergrundbilder (optional)

Falls einzelne Feature-Karten Hintergrundbilder haben sollen:

**Pro Feature-Karte**
- **Größe**: 600 × 400 px
- **Aspect Ratio**: 3:2
- **Empfehlung**: Drei verschiedene Bilder:
  - 🍜 Ramen/Zubereitung
  - 🥤 Getränke/Snacks
  - 🛒 Lebensmittel/Regale

---

## 📏 Zusammenfassung - Quick Reference

| Sektion | Desktop | Tablet | Mobile | Format |
|---------|---------|--------|--------|--------|
| **Hero** | 1920×1080px | 1280×720px | 768×1024px | JPG/WebP |
| **Features** | 1920×800px | 1280×600px | 768×600px | JPG/PNG |
| **Testimonials** | 1920×700px | 1280×500px | 768×600px | JPG (optional) |
| **CTA Banner** | 1920×600px | 1280×500px | 768×500px | JPG |
| **Feature Cards** | 600×400px | 400×300px | 400×300px | JPG |

---

## 💡 Tipps für die Bildauswahl/Erstellung

### Hero Section:
- ✅ Asiatische Speisen (Ramen, Sushi, Wok-Gerichte)
- ✅ Markt-Atmosphäre (aber unscharf im Hintergrund)
- ✅ Grüne/beige Farbtöne passen zum Design
- ❌ Zu viele Details (stört Text)
- ❌ Zu dunkel (Text muss lesbar sein)

### Allgemein:
- ✅ Konsistente Farbpalette (Grün, Beige, Weiß)
- ✅ Authentische asiatische Motive
- ✅ Appetitliche Darstellung von Essen
- ❌ Zu grelle Farben
- ❌ Wasserzeichen oder Copyright-Hinweise

### Dateinamen-Empfehlung:
```
hero-bg-desktop.jpg
hero-bg-tablet.jpg
hero-bg-mobile.jpg
features-bg.jpg
cta-banner-bg.jpg
```

---

## 🖼️ Bild-Placeholder für Tests

Falls du noch keine Bilder hast, kannst du temporär verwenden:
- **Unsplash**: https://unsplash.com/s/photos/asian-food
- **Pexels**: https://www.pexels.com/search/asian-food/
- **Pixabay**: https://pixabay.com/images/search/ramen/

**Suchbegriffe**:
- "ramen bowl"
- "asian market"
- "japanese food"
- "asian grocery"
- "bamboo texture"

---

## 📱 Responsive Bild-Implementierung

Die Website verwendet Tailwind CSS. Bilder können so eingefügt werden:

```jsx
// Hero Section Beispiel
<section 
  className="hero-section"
  style={{
    backgroundImage: 'url(/images/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

Oder mit Tailwind-Klassen:
```jsx
<div className="bg-cover bg-center bg-no-repeat" 
     style={{backgroundImage: 'url(/images/hero-bg.jpg)'}}>
```


