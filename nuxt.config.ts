export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  experimental: {
    reactivityTransform: true,
  },
  css: [
    '~/assets/styles/index.css',
  ],
  router: {
    base: '/nuxt3-movies/',
  },
  target: 'static',
})
