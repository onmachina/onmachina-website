<template>
  <div class="container mx-auto px-12 text-center">
    <Nav />
    <Hero />
    <Features />
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';
  import Hero from '../components/Hero.vue';
  import Features from '../components/Features.vue';

  export default {
    name: "IndexPage",
    components: { Nav, Hero, Features }
  }
</script>
