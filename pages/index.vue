<script setup lang="ts">
const { results: movies } = await $fetch('/api/list', {
  params: {
    category: 'popular',
    type: 'movie',
    page: 1,
  },
})

const { results: tvs } = await $fetch('/api/list', {
  params: {
    category: 'popular',
    type: 'tv',
    page: 1,
  },
})
</script>

<template>
  <div>
    <MediaBanner type="movie" :item="movies[0]" />
    <MediaTitle title="Popular Movies" more-link="https://www.google.com" />
    <ContainerAutoY>
      <MediaGrid>
        <MediaCard v-for="item in movies" :key="item.id" type="movie" :item="item" />
      </MediaGrid>
    </ContainerAutoY>
    <MediaTitle title="Popular TV Shows" more-link="https://www.google.com" />
    <ContainerAutoY>
      <MediaGrid>
        <MediaCard v-for="item in tvs" :key="item.id" type="tv" :item="item" />
      </MediaGrid>
    </ContainerAutoY>

    <Footer />
  </div>
</template>
