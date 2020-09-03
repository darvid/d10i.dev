import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

import { defaultTitle } from '../next-seo.config';

const StreamEntrySeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `${process.env.DOMAIN}${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – ${defaultTitle}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName={process.env.AUTHOR}
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={process.env.AUTHOR}
        title={title}
        url={url}
      />
    </>
  );
};

export default StreamEntrySeo;
