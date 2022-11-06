<script setup lang="ts">
import type { Media } from '~~/types'

const { item } = defineProps<{
  item: Media
}>()
</script>

<template>
  <div>
    <div class="mb-4 text-3xl">
      Backdrops <span class="text-sm opacity-50">{{ item.images?.backdrops?.length || 0 }} images </span>
    </div>

    <div class="grid grid-cols-20rem gap-4">
      <PhotoCard v-for="i of item.images?.backdrops" :key="i.file_path" :item="i" class="aspect-[16/9]" />
    </div>

    <div class="mb-4 text-3xl mt-4">
      Posters <span class="text-sm opacity-50">{{ item.images?.posters?.length || 0 }} images </span>
    </div>
    <div class="grid grid-cols-15rem gap-4">
      <PhotoCard v-for="i of item.images?.posters" :key="i.file_path" :item="i" class="aspect-[2/3]" />
    </div>
  </div>
</template>
