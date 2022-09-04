<template>
  <div class="container mx-auto px-12 text-center">
    <Nav />
    <Hero />
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';
  import Hero from '../components/Hero.vue';

  export default {
    name: "IndexPage",
    components: { Nav, Hero }
  }
</script>
