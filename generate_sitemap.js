const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const baseUrl = 'https://example.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
    'index.html',
    'products.html',
    'contact.html',
    'privacy.html',
    'terms.html',
    'shipping.html',
    'cookies.html'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === 'index.html' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// Add product pages
products.forEach(product => {
    sitemap += `  <url>
    <loc>${baseUrl}/product-${product.id}.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

sitemap += `</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log('sitemap.xml generated successfully.');
