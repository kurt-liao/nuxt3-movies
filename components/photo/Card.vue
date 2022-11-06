<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Image } from '~~/types'
import { TMDB_IMG_URL } from '~/constants/url'

defineProps<{
  item: Image
}>()
</script>

<template>
  <button class="text-left bg-gray relative hover:scale-105 transition-all flex justify-center items-center" title="View photo">
    <img v-if="item.file_path" :src="`${TMDB_IMG_URL}/w400/${item.file_path}`" alt="Photo" width="400" height="600" class="w-full h-full object-cover">
    <Icon v-else icon="iconoir:file-not-found" class="w-12 h-12 text-gray-500" />
  </button>
</template>
