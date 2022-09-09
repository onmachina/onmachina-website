<template>
  <section class="mt-40">
    <h2 class="text-white font-demi text-5xl">Ready for Web3</h2>
    <p class="text-gray-300 text-xl font-book leading-tight w-full md:w-3/5 mx-auto mt-4">Next generation storage integrated with the <strong class="text-sea">NEAR Protocol</strong></p>
    <Diagram class="mt-20"/>
  </section>
</template>

<script>
  import Diagram from './Diagram.vue';

  export default {
    name: "BuiltForWeb3",
    components: { Diagram }
  }
</script>
