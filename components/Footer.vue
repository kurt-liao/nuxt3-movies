<script setup>
import { Icon } from '@iconify/vue'

const nuxtBackground = {
  'background': '-webkit-linear-gradient(#A5CC82, #99f2c8)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}

const tailwindBackground = {
  'background': '-webkit-linear-gradient(#00F260, #0575E6)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}

const tsBackground = {
  'background': '-webkit-linear-gradient(#56CCF2, #2F80ED)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}

const tmdbBackground = {
  'background': '-webkit-linear-gradient(#85CCA5, #3DB5E2)',
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
        <span class="font-bold text-lg hidden md:inline">Nuxt3</span>
      </NuxtLink>
      <span class="p-2">·</span>
      <NuxtLink
        to="https://tailwindcss.com/" alt="Tailwindcss" :style="tailwindBackground"
      >
        <Icon icon="vscode-icons:file-type-tailwind" class="inline w-6 h-6 mb-2" />
        <span class="font-bold text-lg hidden md:inline">Tailwindcss</span>
      </NuxtLink>
      <span class="p-2">·</span>
      <NuxtLink
        to="https://www.typescriptlang.org/" alt="TypeScript" :style="tsBackground"
      >
        <Icon icon="logos:typescript-icon-round" class="inline w-6 h-6 mb-2" />
        <span class="font-bold text-lg hidden md:inline">TypeScript</span>
      </NuxtLink>
    </p>
    <p class="mt-4 text-sm text-gray-500">
      Data provided by <NuxtLink to="https://www.themoviedb.org/" alt="TMDB" class="text-md tracking-widest font-bold " :style="tmdbBackground">
        TMDB
      </NuxtLink>
    </p>

    <div class="flex gap-4 mt-8">
      <NuxtLink to="https://twitter.com/cn91288" class="block px-2" alt="twitter@cn91288">
        <Icon icon="icomoon-free:twitter" class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink to="https://github.com/kurt-liao/nuxt3-movies" class="block px-2" alt="kurt-liao/nuxt3-movies">
        <Icon icon="icomoon-free:github" class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink to="https://me.kurtstories.com" class="block px-2" alt="me.kurtstories.com">
        <Icon icon="heroicons-outline:terminal" class="h-6 w-6" />
      </NuxtLink>
    </div>
  </div>
</template>
