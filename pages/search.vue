<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Media } from '~~/types'

interface QueryType {
  query: string
  page: number
}

const defaultQuery: QueryType = {
  query: '',
  page: 1,
}

const items = $ref<Media[]>([])
let totalCount = $ref<number>(0)
let isLoading = $ref<boolean>(false)
const query = $ref<QueryType>(defaultQuery)
let currentKeyword = $ref<string>('')
let notFound = $ref<boolean>(false)

const search = async () => {
  if (isLoading)
    return

  items.length = 0
  totalCount = 0
  notFound = false
  query.page = 1
  currentKeyword = query.query

  isLoading = true
  const { results, total_results } = await $fetch('/api/search', {
    params: {
      ...query,
    },
  })

  if (!total_results)
    notFound = true

  items.push(...results)
  totalCount = total_results
  isLoading = false
}

const fetch = async () => {
  if (items.length >= totalCount || isLoading)
    return

  isLoading = true
  const { results, total_results } = await $fetch('/api/search', {
    params: {
      ...query,
    },
  })
  items.push(...results)
  totalCount = total_results
  query.page += 1
  isLoading = false
}

const throttleSearch = debounce(search, 500)

watch(() => query.query, () => throttleSearch())
</script>

<template>
  <div class="h-full overflow-hidden">
    <div class="flex bg-gray-800 items-center px-6 py-4 gap-3 sticky">
      <Icon icon="heroicons:magnifying-glass-20-solid" class="h-6 w-6 text-2xl opacity-50 bg-transparent" />
      <input v-model="query.query" type="text" class="text-2xl bg-transparent outline-none w-full" placeholder="Type to search...">
    </div>
    <div v-if="!currentKeyword" class="text-4xl p-10 font-100 opacity-50 text-center">
      Type something to search movies or shows...
    </div>

    <p v-else class="text-4xl p-10 py-4">
      Search result for <span class="font-bold underline">{{ currentKeyword }}</span>
    </p>

    <p v-if="items.length" class="text-sm opacity-50 p-10 py-0">
      Total: {{ totalCount }} items
    </p>

    <p v-if="notFound" class="p-10 opacity-50 py-0">
      No item matched keyword: <span class="font-bold">{{ currentKeyword }}</span>. Try other keywords...
    </p>

    <MediaGrid v-if="items.length > 0" v-infinite-scroll="fetch" class="h-5/6 overflow-y-scroll">
      <MediaCard v-for="item in items" :key="item.id" :item="item" :type="item.media_type" />
    </MediaGrid>

    <Spin v-if="isLoading" class="absolute bottom-5 inset-x-1/2 w-12 h-12" />
  </div>
</template>
