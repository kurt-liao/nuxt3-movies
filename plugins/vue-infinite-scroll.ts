import InfiniteScroll from '@kurtliao/vue-infinite-scroll'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(InfiniteScroll, {})
})
