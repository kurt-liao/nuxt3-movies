<script setup lang="ts">
import type { MediaType, QueryItem } from '~/types'

const type: MediaType = 'movie'
const category = 'popular'

const QUERY_ITEMS: QueryItem[] = [{ type: 'movie', title: 'Popular Moives', category: 'popular' }, { type: 'tv', title: 'Popular TV Shows', category: 'popular' }]

const { results } = await $fetch('/api/list', {
  params: {
    type,
    category,
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
    <CarouselAutoQuery v-for="params in QUERY_ITEMS" :key="params.title" :params="params" />
    <Footer />
  </div>
</template>
