<template>
  <div class="py-20 w-full lg:w-3/5 mx-auto">
    <h3 class="text-white text-base font-medium mb-3">The world’s first</h3>
    <h1 class="text-5xl md:text-6xl text-white font-demi leading-none">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-peach to-sea">Truly decentralized</span>
      storage network
    </h1>
    <p class="text-gray-400 mt-8 font-book">
      We are building <strong class="text-white font-demi">storage first</strong> <em>(resilience, availability, capacity, performance)</em>, <strong class="text-white font-demi">enhanced with blockchain</strong> <em>(decentralized, immutable, verified owner, permissionless)</em> to give control and ownership of data <strong class="text-white font-demi">back to individuals</strong> from the public cloud oligopolists.
    </p>
    <JoinForm class="mt-12" />
  </div>
</template>

<script>
  import JoinForm from '../components/JoinForm.vue';

  export default {
    name: "Hero",
    components: { JoinForm }
  }
</script>