<script setup lang="ts">
import type { MediaType } from '~~/types'
import MediaOverview from '~/components/media/Overview.vue'
import MediaVideos from '~/components/media/Videos.vue'
import MediaPhotos from '~/components/media/Photos.vue'

const route = useRoute()
const type = $computed(() => route.params.type as MediaType)
const id = $computed(() => route.params.id)

const COMPONENTS = {
  overview: MediaOverview,
  videos: MediaVideos,
  photos: MediaPhotos,
}

const activeTab = $ref<string>('overview')

const [item, recommendations] = await Promise.all([
  $fetch('/api/detail', {
    params: {
      type,
      id,
    },
  }),
  $fetch('/api/recommendations', {
    params: {
      id,
      type,
    },
  }),
])
</script>

<template>
  <div>
    <MediaBanner :type="type" :item="item" />
    <div class="mt-10 flex justify-center gap-10">
      <button class="uppercase text-2xl opacity-50 pb-2 px-2 transition-all" :class="{ 'opacity-100 border-b-2': activeTab === 'overview' }" @click="activeTab = 'overview'">
        Overview
      </button>
      <button class="uppercase text-2xl opacity-50 pb-2 px-2 transition-all" :class="{ 'opacity-100 border-b-2': activeTab === 'videos' }" @click="activeTab = 'videos'">
        Videos
      </button>
      <button class="uppercase text-2xl opacity-50 pb-2 px-2 transition-all" :class="{ 'opacity-100 border-b-2': activeTab === 'photos' }" @click="activeTab = 'photos'">
        Photos
      </button>
    </div>

    <div class="px-4 md:px-10 mt-12">
      <component :is="COMPONENTS[activeTab]" :item="item" />
    </div>

    <div v-if="recommendations && recommendations.results && recommendations.results.length > 0" class="mt-10">
      <div class="px-4 mb-4 md:px-10 text-3xl">
        More like this
      </div>
      <ContainerScroll>
        <div class="flex gap-2 w-max p-2 px-4 md:px-10">
          <MediaCard v-for="r in recommendations.results" :key="r.id" :item="r" :type="type" class="w-60" />
        </div>
      </ContainerScroll>
    </div>
  </div>
</template>
