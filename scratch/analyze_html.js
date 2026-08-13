const fs = require('fs');

const content = fs.readFileSync('purelane-homepage.html', 'utf8');
const lines = content.split('\n');

console.log('Total lines in purelane-homepage.html:', lines.length);
console.log('Total size:', content.length, 'bytes');

// Check head / style / script tags
const styleMatches = content.match(/<style[\s\S]*?<\/style>/gi) || [];
console.log('Number of <style> blocks:', styleMatches.length);
let styleLength = 0;
styleMatches.forEach(s => styleLength += s.length);
console.log('Total style length:', styleLength, 'bytes');

const scriptMatches = content.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('Number of <script> blocks:', scriptMatches.length);
let scriptLength = 0;
scriptMatches.forEach(s => scriptLength += s.length);
console.log('Total script length:', scriptLength, 'bytes');

// Find sections or major containers with id or class
const idMatches = [...content.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Found IDs:', Array.from(new Set(idMatches)));

// Find section tags
const sectionMatches = [...content.matchAll(/<section[\s\S]*?>/g)];
console.log('Found <section> tags count:', sectionMatches.length);
sectionMatches.forEach((s, idx) => console.log(`Section ${idx+1}:`, s[0].slice(0, 100)));

// Find external assets/links
const fontLinks = [...content.matchAll(/<link[^>]*>/g)].map(m => m[0]);
console.log('Font / CSS Links:', fontLinks);

// Check SVGs / base64 images
const dataUris = [...content.matchAll(/url\("?(data:image\/[^"']+)"?\)/g)];
console.log('Count of CSS data URI assets:', dataUris.length);
