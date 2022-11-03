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
      <MediaGrid>
        <MediaCard v-for="item in results" :key="item.id" :type="params.type" :item="item" />
      </MediaGrid>
    </ContainerScroll>
  </div>
</template>
