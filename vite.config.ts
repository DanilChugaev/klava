import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/klava/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Klava',
        short_name: 'Klava',
        description: 'Klava - клавиатурный тренажер',
        display: 'fullscreen',
        theme_color: '#f8fafc',
        icons: [
          {
            src: 'form-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'form-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
      },
    }),
  ],
});
