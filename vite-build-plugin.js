// Plugin to optimize HTML output after build
export function optimizeHTML() {
  return {
    name: 'optimize-html',
    generateBundle(options, bundle) {
      // Find the HTML file
      const htmlEntry = Object.keys(bundle).find(key => key.endsWith('.html'))
      if (htmlEntry) {
        const htmlAsset = bundle[htmlEntry]
        let html = htmlAsset.source || htmlAsset.code
        
        // Find hero image from assets
        const heroImage = Object.keys(bundle).find(key => 
          key.includes('hero') && (key.endsWith('.png') || key.endsWith('.jpg') || key.endsWith('.webp'))
        )
        
        if (heroImage) {
          const heroPath = bundle[heroImage].fileName
          // Add preload for hero image
          html = html.replace(
            '<link rel="stylesheet',
            `<link rel="preload" as="image" href="/Asia-Taste/${heroPath}" fetchpriority="high">\n    <link rel="stylesheet`
          )
        }
        
        // Update favicon path if it exists
        const logoAsset = Object.keys(bundle).find(key => 
          key.includes('logo') && (key.endsWith('.png') || key.endsWith('.jpg'))
        )
        if (logoAsset) {
          const logoPath = bundle[logoAsset].fileName || logoAsset
          html = html.replace(
            /<link rel="icon"[^>]*>/g,
            `<link rel="icon" type="image/png" href="/Asia-Taste/${logoPath}">`
          )
          html = html.replace(
            /<link rel="apple-touch-icon"[^>]*>/g,
            `<link rel="apple-touch-icon" href="/Asia-Taste/${logoPath}">`
          )
        }
        
        // Optimize all image references to use modern formats if available
        // This would work if we had WebP versions
        html = html.replace(
          /<img([^>]*?)src="([^"]*\.(?:png|jpg|jpeg))"([^>]*?)>/gi,
          (match, before, src, after) => {
            // Try to find WebP version
            const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
            const webpAsset = Object.keys(bundle).find(key => 
              key.includes(webpSrc.split('/').pop().replace('.webp', ''))
            )
            
            if (webpAsset) {
              const webpPath = bundle[webpAsset]?.fileName || webpAsset
              return `<picture>${match.replace(src, webpPath)}</picture>`
            }
            return match
          }
        )
        
        // Make CSS non-blocking by converting to preload + async inject
        html = html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
          (match, href) => {
            return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`
          }
        )
        
        // Update the bundle
        if (htmlAsset.source !== undefined) {
          htmlAsset.source = html
        } else {
          htmlAsset.code = html
        }
      }
    },
  }
}

