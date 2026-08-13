const fs = require('fs');

const html = fs.readFileSync('page.html', 'utf8');
const startTag = '<script id="fileData" type="application/octet-stream">';
const endTag = '</script>';

const startIdx = html.indexOf(startTag);
if (startIdx !== -1) {
  const contentStart = startIdx + startTag.length;
  const endIdx = html.indexOf(endTag, contentStart);
  if (endIdx !== -1) {
    const b64 = html.substring(contentStart, endIdx).trim();
    const decoded = Buffer.from(b64, 'base64').toString('utf8');
    fs.writeFileSync('purelane-homepage.html', decoded, 'utf8');
    console.log('Extracted purelane-homepage.html successfully, size:', decoded.length, 'bytes');
  } else {
    console.error('End tag not found');
  }
} else {
  console.error('Start tag not found');
}
