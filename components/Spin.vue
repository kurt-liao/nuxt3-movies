<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="loader">
    <span style="--i:1;" />
    <span style="--i:2;" />
    <span style="--i:3;" />
    <span style="--i:4;" />
    <span style="--i:5;" />
    <span style="--i:6;" />
    <span style="--i:7;" />
    <span style="--i:8;" />
    <span style="--i:9;" />
    <span style="--i:10;" />
    <span style="--i:11;" />
    <span style="--i:12;" />
    <span style="--i:13;" />
    <span style="--i:14;" />
    <span style="--i:15;" />
    <span style="--i:16;" />
    <span style="--i:17;" />
    <span style="--i:18;" />
    <span style="--i:19;" />
    <span style="--i:20;" />
  </div>
</template>

<style scoped>
.loader {
  position: relative;
  width: 2rem;
  height: 2rem;
}

.loader span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--i)));
}

.loader span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: .5rem;
  height: .5rem;
  background: rgb(161 161 170);
  border-radius: 50%;
  animation: animate 2s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes animate {
  0% {
    transform: scale(0);
  }
  10% {
    transform: scale(1.2);
  }
  80%, 100% {
    transform: scale(0);
  }
}
</style>
