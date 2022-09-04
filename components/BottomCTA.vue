<template>
  <section class="p-8 bg-darkblue-800 rounded-md w-full mx-auto">
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
