<template>
  <footer class="my-32">
    <nuxt-link to="/">
      <OnMachinaLogo class="w-32 mx-auto" />
    </nuxt-link>
    <p class="text-white font-demi tracking-widest mt-8">
      <span class="text-sea">de<span class="text-gray-100">•</span>cen<span class="text-gray-100">•</span>tral<span class="text-gray-100">•</span>ized</span>
      storage
    </p>
    <p class="mt-12 text-sm text-gray-200">
      &copy; Copyright {{currentDate.getFullYear()}}, OnMachina Association™
    </p>
  </footer>
</template>

<script>
  import OnMachinaLogo from './OnMachina-logo.vue';

  export default {
    name: "Footer",
    components: { OnMachinaLogo },
    data(){
     return {
        currentDate: new Date,
        }
    }
  }
</script>