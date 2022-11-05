<script setup lang="ts">
import type { Media } from '~~/types'

const { item } = defineProps<{
  item: Media
}>()

const directors = $computed(() => item.credits?.crew.filter(person => person.job === 'Director'))
</script>

<template>
  <div class="flex flex-col justify-center gap-6">
    <div v-if="item.overview">
      <h2 class="text-4xl mb-4">
        Storyline
      </h2>

      <div class="opacity-50" v-text="item.overview" />
    </div>

    <div class="text-sm opacity-80">
      <ul class="grid grid-cols-[max-content_1fr] lg:grid-colos-[max-content_1fr_max-content_1fr] gap-3 items-center">
        <template v-if="item.release_date">
          <div>
            Released
          </div>
          <div>
            {{ formatDate(item.release_date) }}
          </div>
        </template>
        <template v-if="item.runtime">
          <div>
            Runtime
          </div>

          <div>
            {{ formatTime(item.runtime) }}
          </div>
        </template>
        <template v-if="directors?.length">
          <div>
            Director
          </div>

          <div class="flex flex-wrap gap-1">
            <NuxtLink
              v-for="person of directors"
              :key="person.id"
              :to="`/person/${person.id}`"
              class="bg-gray-500 hover:bg-gray-300 px-2 py-1 rounded-md text-xs"
            >
              {{ person.name }}
            </NuxtLink>
          </div>
        </template>
        <template v-if="item.budget">
          <div>
            Budget
          </div>

          <div>
            ${{ numberWithCommas(item.budget) }}
          </div>
        </template>
        <template v-if="item.revenue">
          <div>
            Revenue
          </div>

          <div>
            ${{ numberWithCommas(item.revenue) }}
          </div>
        </template>
        <template v-if="item.genres && item.genres.length">
          <div>
            Genre
          </div>

          <div class="flex flex-wrap gap-1">
            <NuxtLink
              v-for="genre of item.genres" :key="genre.id"
              :to="`/genre/${genre.id}/${item.media_type}`"
              class="bg-gray-500 hover:bg-gray-300 px-2 py-1 rounded-md text-xs"
            >
              {{ genre.name }}
            </NuxtLink>
          </div>
        </template>
        <template v-if="item.status">
          <div>
            Status
          </div>

          <div>
            {{ item.status }}
          </div>
        </template>
        <template v-if="item.original_language">
          <div>
            Language
          </div>

          <div>
            {{ formatLang(item.original_language) }}
          </div>
        </template>
        <template v-if="item.production_companies && item.production_companies.length">
          <div>
            Production
          </div>

          <div>
            {{ item.production_companies.map(i => i.name).join(', ') }}
          </div>
        </template>
      </ul>
    </div>
  </div>
</template>
