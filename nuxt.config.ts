const isPages = process.env.DEPLOY_ENV === 'GH_PAGES'

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
    base: isPages ? '/nuxt3-movies/' : '',
  },
})
