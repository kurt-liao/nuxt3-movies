<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Nuxt3 Movies',
  titleTemplate: title => title !== 'Nuxt3 Movies' ? `${title} - Nuxt3 Movies` : title,
  meta: [{
    name: 'description',
    content: 'The movies collection built with Nuxt3 & TMDB',
  }],
  link: [
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
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
