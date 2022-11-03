<script setup lang="ts">
const { title = '', moreLink = '' } = defineProps<{
  title?: string
  moreLink?: string
}>()
</script>

<template>
  <div class="flex px-4 md:px-10 py-3 items-center justify-between">
    <div class="text-2xl">
      {{ title }}
    </div>
    <a v-if="moreLink" :href="moreLink" class="opacity-50 font-semibold hover:text-primary  hover:opacity-100 transition-all">
      Explore more
    </a>
  </div>
</template>
