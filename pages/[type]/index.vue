<script setup lang="ts">
import type { MediaType } from '~/types'
import { QUERY_LIST } from '~/constants/list'

definePageMeta({
  key: route => route.fullPath,
  validate: ({ params }) => {
    return ['movie', 'tv'].includes(params.type as MediaType)
  },
})

const route = useRoute()
const type = $computed(() => route.params.type as MediaType || 'movie')
const queryParams = QUERY_LIST[type]

useHead({
  title: type === 'movie' ? 'Movies' : 'TV Shows',
})

const { results } = await $fetch('/api/list', {
  params: {
    type,
    category: queryParams[0].category,
  },
})

const bannerItem = await $fetch('/api/detail', {
  params: {
    type,
    id: results[0].id,
  },
})
</script>

<template>
  <div>
    <MediaBanner :type="type" :item="bannerItem" />
    <CarouselAutoQuery v-for="params in queryParams" :key="params.title" :params="params" />
    <Footer />
  </div>
</template>
