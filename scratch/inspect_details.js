const fs = require('fs');

const content = fs.readFileSync('purelane-homepage.html', 'utf8');

// Extract script tag content
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/i);
if (scriptMatch) {
  console.log('=== JAVASCRIPT CONTENT ===');
  console.log(scriptMatch[1]);
}

// Extract key CSS selectors and media queries
const styleMatches = content.match(/<style>([\s\S]*?)<\/style>/gi);
if (styleMatches) {
  console.log('\n=== CSS MEDIA QUERIES ===');
  const css = styleMatches.join('\n');
  const mediaQueries = css.match(/@media[^{]+\{/g);
  console.log('Media Queries:', mediaQueries);
  
  // Extract CSS variables
  const rootMatch = css.match(/:root\s*\{([^}]+)\}/);
  if (rootMatch) {
    console.log('\n=== CSS ROOT VARIABLES ===');
    console.log(rootMatch[1].trim());
  }
}
