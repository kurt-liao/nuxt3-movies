<script setup lang="ts">
import type { Media } from '~~/types'

const { item } = defineProps<{
  item: Media
}>()
</script>

<template>
  <div class="">
    <div class="mb-4">
      {{ item.videos?.results.length || 0 }} Videos
    </div>

    <VideoGrid>
      <VideoCard
        v-for="i of item.videos?.results"
        :key="i.id"
        :item="i"
      />
    </VideoGrid>
  </div>
</template>
