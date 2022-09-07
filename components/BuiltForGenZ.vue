<template>
  <section class="mt-40 mb-36 text-left flex flex-col md:flex-row gap-8 align-middle items-center justify-center">
  <div class="w-full md:w-3/5">
    <h2 class="text-white font-demi text-5xl">Built for Generation Zetabyte</h2>
    <p class="text-gray-300 text-xl font-book leading-tight mt-4">Humanity will need to store more than <strong class="text-sea">180 zetabytes by 2025</strong> This can only be achieved through high scalabilty and availability.</p>
  </div>
    <DataChart class="opacity-90"/>
  </section>
</template>

<script>
import DataChart from './DataChart.vue';

  export default {
    name: "BuiltForGenZ",
    components: { DataChart }
  }
</script>