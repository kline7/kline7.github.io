import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Spencer Kline',
  description: "Spencer's website",
  site: import.meta.env.SITE,
  items: import.meta.glob('./blog/**.mdx'),
});