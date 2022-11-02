<script setup lang="ts">
import type { MediaType } from '~/types'

definePageMeta({
  key: route => route.fullPath,
  validate: ({ params }) => {
    return ['movie', 'tv'].includes(params.type as MediaType)
  },
})

const route = useRoute()
const type = $computed(() => route.params.type as MediaType || 'movie')
const title = $computed(() => type === 'movie' ? 'Movies' : 'TV Shows')

useHead({
  title: type === 'movie' ? 'Movies' : 'TV Shows',
})

const { results: firstContents } = await $fetch('/api/list', {
  params: {
    category: 'popular',
    type,
  },
})

const { results: secondContents } = await $fetch('/api/list', {
  params: {
    category: 'top_rated',
    type,
  },
})

const { results: thirdContents } = await $fetch('/api/list', {
  params: {
    category: type === 'movie' ? 'upcoming' : 'airing_today',
    type,
  },
})
</script>

<template>
  <div>
    <MediaBanner :type="type" :item="firstContents[0]" />
    <MediaTitle :title="`Popular ${title}`" more-link="https://www.google.com" />
    <ContainerAutoY>
      <MediaGrid>
        <MediaCard v-for="item in firstContents" :key="item.id" :type="type" :item="item" />
      </MediaGrid>
    </ContainerAutoY>
    <MediaTitle :title="`Top Rated ${title}`" more-link="https://www.google.com" />
    <ContainerAutoY>
      <MediaGrid>
        <MediaCard v-for="item in secondContents" :key="item.id" :type="type" :item="item" />
      </MediaGrid>
    </ContainerAutoY>
    <MediaTitle :title="type === 'movie' ? `Upcoming ${title}` : `${title} Airing Today`" more-link="https://www.google.com" />
    <ContainerAutoY>
      <MediaGrid>
        <MediaCard v-for="item in thirdContents" :key="item.id" :type="type" :item="item" />
      </MediaGrid>
    </ContainerAutoY>

    <Footer />
  </div>
</template>
