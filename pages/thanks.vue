<template>
  <div class="container mx-auto px-12 text-center">
    <Nav />
    <section class="pt-20 w-full lg:w-3/5 mx-auto">
      <h1 class="text-5xl md:text-6xl text-white font-demi leading-none"><span class="text-transparent bg-clip-text bg-gradient-to-r from-peach to-sea block">Thank you,</span> your email has been received!</h1>
      <p class="text-gray-400 mt-8 mb-32 w-full md:w-3/4 mx-auto font-book">
      You're on the list, we will reach out as soon as possible. In the meantime, feel free to <a href="https://twitter.com/onmachina" class="underline text-white">follow @OnMachina on Twitter</a> for regular updates.
    </p>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: "ThanksPage",
    components: { Nav, Footer }
  }
</script>
