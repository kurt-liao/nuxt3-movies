<script setup lang="ts">
import type { Media, MediaType } from '~/types'
import { TMDB_IMG_URL } from '~/constants/url'

defineProps<{
  type: MediaType
  item: Media
}>()
</script>

<template>
  <NuxtLink :to="`${item.media_type || type}/${item.id}`" class="block mb-6">
    <div class="relative bg-black aspect-[1/1] md:aspect-[3/2] lg:aspect-[25/9] aspect-1-1 md:aspect-3-2 lg:aspect-25-9 ">
      <div class="absolute top-0 right-0 bottom-0 lg:left-1/3 opacity-70">
        <img :src="`${TMDB_IMG_URL}/w400${item.poster_path}`" width="400" height="225" :alt="item.title || item.name" class="w-full h-full object-cover">
      </div>
      <div class="absolute bottom-0 left-0 top-0 right-0 flex flex-col justify-center p-10 bg-gradient-to-t from-black via-black to-transparent lg:px-24 lg:w-2/3 lg:bg-gradient-to-r">
        <div>
          <h1 class="mt-2 text-4xl lg:text-5xl">
            {{ item.title || item.name }}
          </h1>
          <div class="flex flex-wrap gap-3 items-center mt-4">
            <StarRating width="w-25" :value="item.vote_average" :show-value="false" />
            <div class="opacity-50 hidden md:block">
              {{ item.vote_average }}
            </div>
            <div class="opacity-50 hidden md:block">
              {{ item.vote_count }} Reviews
            </div>
            <div v-if="item.release_date" class="opacity-50">
              {{ item.release_date.slice(0, 4) }}
            </div>
            <div v-if="item.runtime" class="opacity-50">
              {{ formatTime(item.runtime) }}
            </div>
          </div>
          <p class="mt-2 opacity-80 leading-relaxed overflow-hidden text-xs md:text-base line-clamp-3">
            {{ item.overview }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
