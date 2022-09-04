<template>
  <div class="container mx-auto px-12 text-center">
    <Nav />
    <Hero />
    <Features />
    <BuiltFor />
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';
  import Hero from '../components/Hero.vue';
  import Features from '../components/Features.vue';
  import BuiltFor from '../components/BuiltFor.vue';

  export default {
    name: "IndexPage",
    components: { Nav, Hero, Features, BuiltFor }
  }
</script>
