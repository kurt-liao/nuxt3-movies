<script setup lang="ts">
import type { Media, MediaType } from '~~/types'

const route = useRoute()
const category = $computed(() => route.params.category as string)
const type = $computed(() => route.params.type as MediaType || 'movie')

const items = $ref<Media[]>([])
let isLoading = $ref<boolean>(false)
let page = $ref<number>(1)
let totalCount = $ref<number>(0)

const fetch = async () => {
  if (isLoading || items.length > totalCount)
    return

  isLoading = true
  const { results, total_results } = await $fetch('/api/list', {
    params: {
      page,
      type,
      category,
    },
  })

  items.push(...results)
  totalCount = total_results
  isLoading = false
  page += 1
}

onMounted(async () => await fetch())
</script>

<template>
  <div class="h-full">
    <div class="px-4 md:px-10 py-3">
      <span class="capitalize text-4xl">{{ category.replace(/_/g, ' ') }} </span>
      <span class="text-4xl">{{ type === 'tv' ? ' TV' : ' Movies' }}</span>
    </div>
    <MediaGrid v-if="items.length > 0" v-infinite-scroll="fetch" class="h-5/6 overflow-y-scroll">
      <MediaCard v-for="item in items" :key="item.id" :item="item" :type="item.media_type" />
    </MediaGrid>

    <Spin v-if="isLoading" class="absolute bottom-10 inset-x-1/2 w-12 h-12" />
  </div>
</template>
