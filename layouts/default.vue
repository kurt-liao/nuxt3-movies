<template>
  <div class="h-full w-full font-sans overflow-hidden grid grid-rows-[1fr_max-content] lg:grid-cols-[max-content_1fr]">
    <div class="overflow-auto">
      <slot />
    </div>
    <Navbar class="lg:order-first" />
  </div>
</template>
