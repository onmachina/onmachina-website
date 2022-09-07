<template>
  <div class="container text-center">
    <Nav />
    <Hero />
    <Features />
    <BuiltForGenZ />
    <BuiltForWeb3 />
    <BottomCTA />
    <Footer />
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';
  import Hero from '../components/Hero.vue';
  import Features from '../components/Features.vue';
  import BuiltForWeb3 from '../components/BuiltForWeb3.vue';
  import BottomCTA from '../components/BottomCTA.vue';

  export default {
    name: "IndexPage",
    components: { Nav, Hero, Features, BuiltForWeb3, BottomCTA }
  }
</script>
