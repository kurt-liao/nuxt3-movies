const isDev = process.env.NODE_ENV === 'development'

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
    base: !isDev ? '/nuxt3-movies/' : '',
  },
  target: 'static',
})
