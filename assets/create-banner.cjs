const fs = require('fs')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
  <rect width="1200" height="400" fill="#0d1117"/>
  <rect x="0" y="0" width="1200" height="4" fill="#10a37f"/>
  <text x="600" y="160" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="#10a37f" text-anchor="middle">🏦 DIO Bank Pro</text>
  <text x="600" y="220" font-family="Arial, sans-serif" font-size="28" fill="#c9d1d9" text-anchor="middle">TypeScript Banking System — Clean Architecture • SOLID • Tests</text>
  <rect x="500" y="260" width="200" height="2" fill="#10a37f" opacity="0.5"/>
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="16" fill="#8b949e" text-anchor="middle">Digital Innovation One — Desafio Premium</text>
</svg>
`.trim()

fs.writeFileSync('/root/.openclaw/workspace/dio-bank-pro/assets/banner.svg', svg)
console.log('Banner SVG criado em assets/banner.svg')
