import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Test for .svg files
      use: [
        {
          loader: '@svgr/webpack', // Use SVGR loader
          options: {
            icon: true, // Optional: Treat SVG as icon
          },
        },
      ],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
