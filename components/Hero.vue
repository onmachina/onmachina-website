<template>
  <div class="py-20 w-full lg:w-3/5 mx-auto">
    <h1 class="text-5xl md:text-8xl text-white font-demi leading-none">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-peach via-salmon to-sea background-animate">Data is Power</span>
    </h1>
    <p class="text-2xl text-white mt-4 font-book">Stop giving yours to the centralized cloud oligopoly</p>
    <p class="text-gray-400 mt-16 font-book w-4/5 mx-auto">
      We’re building <strong class="text-white font-demi">OnMachina: the decentralized storage network</strong> to deliver reliable and scalable storage, with true ownership and control.
    </p>
    <JoinForm class="mt-20" />
  </div>
</template>

<script>
  import JoinForm from '../components/JoinForm.vue';

  export default {
    name: "Hero",
    components: { JoinForm }
  }
</script>

<style>
  .background-animate {
    background-size: 400%;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }
  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>