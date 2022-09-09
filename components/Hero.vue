<template>
  <div class="py-20 w-full lg:w-4/5 mx-auto">
    <h1 class="text-7xl lg:text-8xl xl:text-9xl text-white font-demi tracking-tight">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-peach via-salmon to-sea background-animate leading-none">Data is Power</span>
    </h1>
    <p class="text-xl lg:text-2xl xl:text-3xl text-white mt-2 font-book">Stop giving yours to the centralized cloud oligopoly</p>
    <p class="text-gray-400 mt-12 text-xl font-book w-full md:w-3/4 mx-auto">
      We’re building <strong class="text-white font-medium">OnMachina™: the decentralized storage network</strong> to deliver reliable and scalable storage, with true ownership and control.
    </p>
    <JoinForm class="mt-20 w-full sm:w-3/4 md:w-10/12 lg:w-3/4 mx-auto" />
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
