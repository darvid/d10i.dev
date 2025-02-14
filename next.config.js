const readingTime = require('reading-time');
const mdxPrism = require('mdx-prism');
const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
    require('remark-emoji'),
    require('remark-capitalize'),
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent),
    }),
  },
})({
  experimental: {
    modern: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/gen_sitemap');
    }

    return config;
  },
});
