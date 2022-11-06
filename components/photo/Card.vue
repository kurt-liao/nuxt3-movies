<script setup lang="ts">
import type { Image } from '~~/types'
import { TMDB_IMG_URL } from '~/constants/url'

defineProps<{
  item: Image
}>()
</script>

<template>
  <button class="text-left block bg-gray relative hover:scale-105 transition-all" title="View photo">
    <img :src="`${TMDB_IMG_URL}/w400/${item.file_path}`" alt="Photo" width="400" height="600" class="w-full h-full object-cover">
    <!-- {{ item }} -->
  </button>
</template>
