<template>
  <section class="p-8 bg-darkblue-800 rounded-md w-full md:w-3/4 mx-auto border-b-4 border-sea mt-12 md:mt-0">
    <JoinForm />
    <p class="text-sm italic text-white mt-6">
      We respect your data and will not share it.
    </p>
  </section>
</template>

<script>
  import JoinForm from '../components/JoinForm.vue';

  export default {
    name: "BottomCTA",
    components: { JoinForm }
  }
</script>
