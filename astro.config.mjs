import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Note: Re-enable sitemap when deploying with a real domain
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://yourdomain.com',
    integrations: [
        tailwind()
        // sitemap()  // Enable when deploying
    ]
});
