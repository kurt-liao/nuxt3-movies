<script setup>
import { PlayIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <button class="pb-2 text-left">
    <div class="flex bg-gray-4 p-1 relative transition-all hover:scale-105 aspect-video">
      <img src="https://movies-proxy.vercel.app/ipx/f_webp,s_400x600/youtube/vi/x5DhuDSArTI/maxresdefault.jpg" width="400" height="600" alt="UK Trailer" class="w-full h-full object-cover">
      <div class="w-full h-full absolute top-0 flex opacity-20 hover:opacity-100">
        <PlayIcon class="w-6 h-6 text-white m-auto" />
      </div>
    </div>
  </button>
</template>
