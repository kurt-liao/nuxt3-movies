<script setup lang="ts">
import { FilmIcon, HomeIcon, MagnifyingGlassIcon, TvIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="flex justify-evenly py-5 px-5 bg-black border-nav border-solid border-t lg:flex-col lg:border-t-0 lg:border-r">
    <RouterLink v-slot="{ isActive }" to="/" title="Home">
      <HomeIcon class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/movie" title="Movie">
      <FilmIcon class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/tv" title="TV Shows">
      <TvIcon class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/search" title="Search">
      <MagnifyingGlassIcon class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
  </div>
</template>
