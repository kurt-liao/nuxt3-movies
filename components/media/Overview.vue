<script setup lang="ts">
import type { Media } from '~~/types'

const props = defineProps<{
  item: Media
}>()
</script>

<template>
  <div>
    <div class="grid grid-cols-[max-content_1fr] max-w-6xl m-auto gap-4">
      <img :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" :alt="item.title || item.name" class="w-[18rem] object-cover aspect-[10/16]">

      <MediaDetail class="w-50" :item="item" />
    </div>
  </div>
</template>
