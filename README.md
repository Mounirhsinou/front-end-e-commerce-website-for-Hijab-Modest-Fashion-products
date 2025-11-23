# Hijab Clothing E-commerce

A modern, lightweight, and accessible front-end e-commerce site for a hijab clothing store. Built with vanilla HTML, CSS, and JavaScript.

## 🚀 Getting Started

1.  **Clone or Download** the repository.
2.  **Open** `index.html` in your browser.
3.  **No build step** required. This is a static site.
4.  For the best experience (and to avoid CORS issues with JSON fetching), serve the folder using a local server:
    - VS Code: Use "Live Server" extension.
    - Python: `python -m http.server`
    - Node: `npx serve`

## 🎨 Image Generation with Ai
Since this is a mock project, all images are placeholders. To generate high-quality images for the 30 products, use the following prompt template with an AI image generator.

**Base Prompt Template:**
> "Studio-quality, high-resolution photograph of a [COLOR] [MATERIAL] hijab and matching modest outfit on a stylish female model, tasteful pose, neutral soft background, natural lighting, full-length and close-up shots, fabric texture visible, modern modest fashion, culturally respectful styling, 4k, photorealistic, high detail, shot with 50mm lens, output format: webp, include transparent background option for hero image."

**Batch Script / Prompts for Top 5 Products:**
1.  **Sage Green Silk Chiffon**: "Studio-quality photo of a Sage Green Silk Chiffon hijab on a model, soft lighting, neutral background, 4k."
2.  **Dusty Rose Jersey**: "Studio-quality photo of a Dusty Rose Jersey Wrap hijab, comfortable style, close-up, 4k."
3.  **Midnight Blue Silk**: "Studio-quality photo of a Midnight Blue Medina Silk hijab, elegant evening look, 4k."
4.  **Sand Crinkle Cotton**: "Studio-quality photo of a Sand Crinkle Cotton hijab, casual texture, natural light, 4k."
5.  **Floral Satin Scarf**: "Studio-quality photo of a Satin Square Scarf with floral print, vibrant colors, 4k."

*Repeat for all 30 products using their specific color and material.*

## 💳 Mock Payment & Checkout

The checkout process is a **simulation**.
- **Credit Card**: Validates format (Luhn algorithm not strictly enforced for simplicity, but basic length/type checks are in place).
- **Payment Provider**: Currently mocks a successful transaction after 2 seconds.
- **Integration**: To add Stripe:
    1.  Include Stripe.js in `checkout.html`.
    2.  Replace the `processPayment` function in `js/checkout.js` with `stripe.confirmCardPayment`.

## ⚡ Performance Checklist (Target: 90+)

- [ ] **Images**: All images converted to WebP.
- [ ] **Lazy Loading**: `loading="lazy"` on all below-the-fold images.
- [ ] **CSS**: Critical CSS inlined (optional), main CSS minified.
- [ ] **JS**: Defer non-critical scripts.
- [ ] **Fonts**: Preconnect to Google Fonts, use `font-display: swap`.

## 🔍 SEO Checklist

- [ ] **Meta Tags**: Unique Title and Description for every page.
- [ ] **Open Graph**: `og:title`, `og:image`, `og:description` present.
- [ ] **Structured Data**: JSON-LD for `Product` on detail pages, `Organization` on home.
- [ ] **Sitemap**: `sitemap.xml` generated.
- [ ] **Robots**: `robots.txt` configured.
- [ ] **Semantic HTML**: Proper use of `<header>`, `<main>`, `<nav>`, `<footer>`, `<h1>`-`<h6>`.

## ♿ Accessibility (WCAG AA)

- [ ] **Contrast**: Colors meet 4.5:1 ratio.
- [ ] **Keyboard**: Full keyboard navigation support (Tab, Enter, Space).
- [ ] **ARIA**: Labels for icons, buttons, and dynamic content.
- [ ] **Focus**: Visible focus indicators on all interactive elements.
- [ ] **Alt Text**: Descriptive alt text for all product images.

## 📄 Legal Templates

Editable templates are provided for:
- Privacy Policy
- Terms & Conditions
- Shipping & Returns
- Cookie Policy

*Disclaimer: These are generic templates. Consult a legal professional for actual use.*

