<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Nuxt Movies',
  titleTemplate: title => title !== 'Nuxt Movies' ? `${title} - Nuxt Movies` : title,
  meta: [{
    name: 'description',
    content: 'The movies collection built with Nuxt3 & TMDB',
  }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#2FBAD3" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body, #__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #111;
  color: #fff;
  color-scheme: dark;
}
</style>
