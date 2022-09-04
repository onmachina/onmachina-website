<template>
  <section class="my-32">
    <nuxt-link to="/">
      <OnMachinaLogo class="w-32 mx-auto" />
    </nuxt-link>
    <p class="text-white font-demi tracking-widest mt-8">
      <span class="text-sea">de<span class="text-gray-100">•</span>cen<span class="text-gray-100">•</span>tral<span class="text-gray-100">•</span>ized</span>
      storage
    </p>
  </section>
</template>

<script>
  import OnMachinaLogo from './OnMachina-logo.vue';

  export default {
    name: "Footer",
    components: { OnMachinaLogo }
  }
</script>