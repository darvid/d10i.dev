const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: process.env.DOMAIN,
  ignoredPaths: ['admin', 'api'],
  extraPaths: [],
  pagesDirectory: `${__dirname}/../pages`,
  targetDirectory: 'public/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: `${__dirname}/../next.config.js`,
  ignoredExtensions: ['png', 'jpg'],
  pagesConfig: {},
});

console.log(`✅ sitemap.xml generated!`);
