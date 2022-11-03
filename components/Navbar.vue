<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex justify-evenly py-5 px-5 bg-black border-nav border-solid border-t lg:flex-col lg:border-t-0 lg:border-r">
    <RouterLink v-slot="{ isActive }" to="/" title="Home">
      <Icon icon="ant-design:home-outlined" class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/movie" title="Movie">
      <Icon icon="icomoon-free:film" class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/tv" title="TV Shows">
      <Icon icon="eva:tv-fill" class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/search" title="Search">
      <Icon icon="heroicons:magnifying-glass-20-solid" class="h-6 w-6" :class="isActive ? 'text-primary' : 'text-white'" />
    </RouterLink>
  </div>
</template>
