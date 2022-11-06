<script setup lang="ts">
import type { MediaType } from '~~/types'

const route = useRoute()
const no = $computed(() => route.params.no as string)
const type = $computed(() => route.params.type as MediaType)
</script>

<template>
  <div>
    {{ no }}
    {{ type }}
  </div>
</template>
