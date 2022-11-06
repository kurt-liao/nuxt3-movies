<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Media, MediaType } from '~/types'
import { TMDB_IMG_URL } from '~/constants/url'

defineProps<{
  type: MediaType
  item: Media
}>()
</script>

<template>
  <NuxtLink :href="`/${item.media_type || type}/${item.id}`" class="flex-1 pb-2">
    <div class="flex justify-center items-center bg-zinc-800 p-1 aspect-[10/16] transition-all hover:scale-105">
      <img v-if="item.poster_path" :src="`${TMDB_IMG_URL}/w400${item.poster_path}`" :alt="item.title || item.name" width="400" height="600" class="w-full h-full object-cover">
      <Icon v-else icon="iconoir:file-not-found" class="w-12 h-12 text-gray-500" />
    </div>
    <div class="mt-2">
      {{ item.title || item.name }}
    </div>
    <StarRating :value="item.vote_average" :show-value="true" />
  </NuxtLink>
</template>
