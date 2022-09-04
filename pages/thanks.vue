<template>
  <div class="container mx-auto px-12 text-center">
    <Nav />
    <section class="py-20 w-full lg:w-3/5 mx-auto">
      <h1 class="text-5xl md:text-6xl text-white font-demi leading-none"><span class="text-transparent bg-clip-text bg-gradient-to-r from-peach to-sea block">Thank you</span> for your interest</h1>
      <p class="text-gray-400 mt-8 font-book">
      We have received your email and will reach out as soon as possible.
    </p>
    </section>
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';

  export default {
    name: "ThanksPage",
    components: { Nav }
  }
</script>
