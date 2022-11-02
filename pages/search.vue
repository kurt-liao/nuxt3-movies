<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div>
    <div class="flex bg-gray-800 items-center px-6 py-4 gap-3 sticky">
      <MagnifyingGlassIcon class="h-6 w-6 text-2xl opacity-50 bg-transparent" />
      <input type="text" class="text-2xl bg-transparent outline-none w-full" placeholder="Type to search...">
    </div>
    <div class="text-4xl p-10 font-100 opacity-50 text-center">
      Type something to search movies or shows...
    </div>
  </div>
</template>
