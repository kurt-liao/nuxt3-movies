<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Nuxt3 Movies',
  titleTemplate: title => title !== 'Nuxt3 Movies' ? `${title} - Nuxt3 Movies` : title,
  meta: [{
    name: 'description',
    content: 'Discover the popular movies and TV shows here.',
  }, {
    name: 'og:url',
    content: 'https://movies.kurtstories.com',
  }, {
    name: 'og:type',
    content: 'website',
  }, {
    name: 'og:title',
    content: 'Nuxt3 Movies',
  }, {
    name: 'og:description',
    content: 'Discover the popular movies and TV shows here.',
  }, {
    name: 'og:image',
    content: 'https://user-images.githubusercontent.com/32745146/199554060-27b87788-baa9-46cd-9cb6-c34821a2c327.png',
  }, {
    name: 'twitter:card',
    content: 'https://user-images.githubusercontent.com/32745146/199554060-27b87788-baa9-46cd-9cb6-c34821a2c327.png',
  }, {
    name: 'twitter:domain',
    content: 'movies.kurtstories.com',
  }, {
    name: 'twitter:url',
    content: 'https://movies.kurtstories.com',
  }, {
    name: 'twitter:title',
    content: 'Nuxt3 Movies',
  }, {
    name: 'twitter:description',
    content: 'Discover the popular movies and TV shows here.',
  }, {
    name: 'twitter:image',
    content: 'https://user-images.githubusercontent.com/32745146/199554060-27b87788-baa9-46cd-9cb6-c34821a2c327.png',
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
