<script setup lang="ts">
import type { Media, MediaType } from '~/types'

defineProps<{
  type: MediaType
  item: Media
}>()
</script>

<template>
  <NuxtLink :href="`/${item.media_type || type}/${item.id}`" class="flex-1 pb-2 w-60">
    <div class="bg-gray p-1 aspect-[10/16] transition-all hover:scale-105">
      <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" :alt="item.title || item.name" width="400" height="600" class="w-full h-full object-cover">
    </div>
    <div class="mt-2">
      {{ item.title }}
    </div>
    <StarRating :value="item.vote_average" :show-value="true" />
  </NuxtLink>
</template>
