<template>
  <section class="mt-32">
    <h2 class="text-white font-demi text-3xl">Built for Web3</h2>
    <p class="text-white font-book leading-tight w-3/5 mx-auto mt-8">Next generation storage built on the Near Blockchain</p>
    <Diagram class="mt-12"/>
  </section>
</template>

<script>
  import Diagram from './Diagram.vue';

  export default {
    name: "BuiltFor",
    components: { Diagram }
  }
</script>