<script setup lang="ts">
import type { QueryItem } from '~/types'
const props = defineProps<{
  params: QueryItem
}>()

const { results } = await $fetch('/api/list', {
  params: props.params,
})
</script>

<template>
  <div>
    <MediaTitle :title="params.title" :more-link="`/${params.type}/category/${params.category}`" />
    <ContainerScroll>
      <div class="flex gap-2 w-max p-2 px-4 md:px-10">
        <MediaCard v-for="item in results" :key="item.id" :type="params.type" :item="item" class="w-60" />
      </div>
    </ContainerScroll>
  </div>
</template>
