<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Video } from '~/types'
import { YOUTUBE_IMG_URL } from '~~/constants/url'

defineProps<{
  item: Video
}>()
</script>

<template>
  <button class="pb-2 text-left">
    <div class="flex bg-gray-4 p-1 relative transition-all hover:scale-105 aspect-video">
      <img :src="`${YOUTUBE_IMG_URL}/${item.key}/maxresdefault.jpg`" width="400" height="600" alt="UK Trailer" class="w-full h-full object-cover">
      <div class="w-full h-full absolute top-0 flex opacity-20 hover:opacity-100">
        <Icon icon="akar-icons:play" class="w-6 h-6 text-white m-auto" />
      </div>
    </div>
  </button>
</template>
