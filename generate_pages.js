const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'products.json');
const templatePath = path.join(__dirname, 'product-template.html');

const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const template = fs.readFileSync(templatePath, 'utf8');

products.forEach(product => {
    let html = template;

    // Replace placeholders
    html = html.replace(/{{id}}/g, product.id);
    html = html.replace(/{{name}}/g, product.name);
    html = html.replace(/{{shortDesc}}/g, product.shortDesc);
    html = html.replace(/{{description}}/g, product.description);
    html = html.replace(/{{price}}/g, product.price.toFixed(2));
    html = html.replace(/{{currency}}/g, product.currency);
    html = html.replace(/{{sku}}/g, product.sku);
    html = html.replace(/{{stockStatus}}/g, product.stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock');
    html = html.replace(/{{category}}/g, product.category);
    html = html.replace(/{{tags}}/g, product.tags.join(', '));
    html = html.replace(/{{colors}}/g, product.colors.join(', '));

    // Images
    html = html.replace(/{{imageHero}}/g, product.images.hero);
    html = html.replace(/{{imageDetail}}/g, product.images.detail);
    html = html.replace(/{{imageLifestyle}}/g, product.images.lifestyle);

    const fileName = `product-${product.id}.html`;
    fs.writeFileSync(path.join(__dirname, fileName), html);
    console.log(`Generated ${fileName}`);
});

console.log('All product pages generated successfully.');
