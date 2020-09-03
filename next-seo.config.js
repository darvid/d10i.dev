const defaultTitle = 'David Gidwani';
const defaultDescription =
  'Software engineer, mechanical keyboard enthusiast, and turbo nerd.';

const SEO = {
  title: defaultTitle,
  description: defaultDescription,
  canonical: `${process.env.DOMAIN}`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${process.env.DOMAIN}`,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${process.env.DOMAIN}/static/images/og.jpg`,
        alt: defaultTitle,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export { defaultDescription, defaultTitle };
export default SEO;
