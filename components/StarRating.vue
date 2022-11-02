<script setup lang="ts">
const { value = 0, width = 'w-20', showValue = false } = defineProps<{
  value?: number
  width?: string
  showValue?: boolean
}>()

const style = computed(() => ({ 'clip-path': `inset(0 ${(10 - value) * 10}% 0 0)` }))
</script>

<template>
  <div class="flex text-sm gap-2 items-center">
    <div class="relative aspect-[11/2] hue-rotate-[320deg]" :class="width">
      <img src="/stars.webp" alt="" class="absolute inset-0" aria-hidden="true">
      <img src="/stars-filled.webp" alt="" class="absolute inset-0" aria-hidden="true" :style="style">
    </div>
    <div v-if="showValue" class="opacity-60">
      {{ value }}
    </div>
  </div>
</template>
