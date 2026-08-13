import fs from 'fs';

const content = fs.readFileSync('index.html', 'utf8');

console.log('--- VERIFICATION CHECKS FOR index.html ---');
console.log('1. Length:', content.length, 'bytes');

// Check DOCTYPE
console.log('2. Has DOCTYPE:', content.toLowerCase().startsWith('<!doctype html>'));

// Check viewport meta tag
console.log('3. Viewport tag:', content.includes('<meta name="viewport"'));

// Check font links
console.log('4. Google Fonts:', content.includes('fonts.googleapis.com'));

// Check root styles and CSS variables count
const cssVarMatches = content.match(/--[a-zA-Z0-9-]+:/g) || [];
console.log('5. Total CSS variables defined:', cssVarMatches.length);

// Check interactive elements IDs
const requiredIDs = ['scenes', 'water', 'hdr', 'top', 'heroProd', 'hstage', 'hdots', 'reviews', 'ingredients', 'how', 'proof', 'rot', 'combos', 'bundles', 'shop', 'range', 'whybundles', 'categories'];
const missingIDs = requiredIDs.filter(id => !content.includes(`id="${id}"`));
console.log('6. Missing essential IDs:', missingIDs.length === 0 ? 'None (All present)' : missingIDs);

// Check background product images
const pImages = ['--p-combo2', '--p-dish', '--p-eraser', '--p-floor', '--p-handwash', '--p-kbtl', '--p-kitchen', '--p-laundry', '--p-mbtl', '--p-metal', '--p-tap', '--p-tbtl', '--p-toilet', '--p-wm'];
const missingImages = pImages.filter(p => !content.includes(p));
console.log('7. Missing product image CSS vars:', missingImages.length === 0 ? 'None (All 14 present)' : missingImages);

// Check JavaScript functions
const jsFunctions = ['IntersectionObserver', 'setScene', 'pickScene', 'syncRail', 'frame', 'onScroll', 'hgo', 'rstep'];
const missingJS = jsFunctions.filter(fn => !content.includes(fn));
console.log('8. Missing JS functions/methods:', missingJS.length === 0 ? 'None (All JS logic present)' : missingJS);
