<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Person } from '~~/types'
import { TMDB_IMG_URL } from '~/constants/url'

defineProps<{
  item: Person
}>()
</script>

<template>
  <a href="#" class="flex-1 w-48">
    <div class="flex justify-center items-center bg-zinc-800 p-1 aspect-[10/16] transition-all hover:scale-105">
      <img v-if="item.profile_path" :src="`${TMDB_IMG_URL}/w400${item.profile_path}`" alt="" width="500" height="800" class="w-full h-full object-cover">
      <Icon v-else icon="iconoir:file-not-found" class="w-12 h-12 text-gray-500" />
    </div>
    <div class="mt-2">{{ item.name }}</div>
    <div class="op-50">{{ item.character }}</div>
  </a>
</template>
