<script setup lang="ts">
import { Icon } from '@iconify/vue'

const scrollRef = $ref<HTMLDivElement>()

function scrollLeft() {
  scrollRef?.scrollTo({
    left: 0,
    behavior: 'smooth',
  })
}
function scrollRight() {
  scrollRef?.scrollTo({
    left: scrollRef?.scrollWidth - scrollRef?.clientWidth,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="relative">
    <div ref="scrollRef" class="overflow-y-auto">
      <slot />
    </div>
    <button class="absolute top-0 bottom-16 p-4 bg-black opacity-0 z-10 hidden lg:block hover:opacity-30 transition-all" @click="scrollLeft">
      <Icon icon="akar-icons:triangle-left" class="w-6 h-6" />
    </button>
    <button class="absolute top-0 bottom-16 right-0 p-4 bg-black opacity-0 z-10 hidden lg:block hover:opacity-30" @click="scrollRight">
      <Icon icon="akar-icons:triangle-right" class="w-6 h-6" />
    </button>
  </div>
</template>
