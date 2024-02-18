// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains:["images.unsplash.com"]
//     },
//     i18n: {
//         locales: ['en', 'ar'],
//         defaultLocale: 'en',
//         localeDetection: false,
//     },
// };

// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["images.unsplash.com"]
    },
};;

export default withNextIntl(nextConfig);
