<script setup>
import { Icon } from '@iconify/vue'

const nuxtBackground = {
  'background': '-webkit-linear-gradient(#A5CC82, #99f2c8)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}

const tmdbBackground = {
  'background': '-webkit-linear-gradient(#1c92d2, #f2fcfe)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}
</script>

<template>
  <div class="p-10 flex flex-col items-center border-t-2 border-nav">
    <p class="mt-4 text-sm text-gray-500">
      Made with
      <NuxtLink
        to="https://v3.nuxtjs.org/" alt="Nuxt3" :style="nuxtBackground"
      >
        <Icon icon="vscode-icons:file-type-nuxt" class="inline w-6 h-6 mb-2" />
        <span class="font-bold text-lg"> Nuxt</span>
        <span class="font-bold text-lg"> 3</span>
      </NuxtLink>
    </p>
    <p class="mt-4 text-sm text-gray-500">
      Data provided by <NuxtLink to="https://www.themoviedb.org/" alt="TMDB" class="text-md tracking-widest font-blod " :style="tmdbBackground">
        TMDB
      </NuxtLink>
    </p>

    <div class="flex gap-4 mt-8">
      <NuxtLink to="https://twitter.com/cn91288" class="block" alt="twitter@cn91288">
        <Icon icon="icomoon-free:twitter" class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink to="https://github.com/kurt-liao/nuxt3-movies" alt="kurt-liao/nuxt3-movies">
        <Icon icon="icomoon-free:github" class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink to="https://me.kurtstories.com" alt="me.kurtstories.com">
        <Icon icon="heroicons-outline:terminal" class="h-6 w-6" />
      </NuxtLink>
    </div>
  </div>
</template>
