<template>
  <div class="container text-center">
    <Nav />
    <Hero />
    <Features />
    <BuiltFor />
    <BottomCTA />
    <Footer />
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';
  import Hero from '../components/Hero.vue';
  import Features from '../components/Features.vue';
  import BuiltFor from '../components/BuiltFor.vue';
  import BottomCTA from '../components/BottomCTA.vue';

  export default {
    name: "IndexPage",
    components: { Nav, Hero, Features, BuiltFor, BottomCTA }
  }
</script>
