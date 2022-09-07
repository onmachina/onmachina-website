<template>
  <section>
    <form name="waitlist" method="POST" action="/thanks" netlify-honeypot="bot-field" data-netlify="true">
      <p class="text-white font-book mb-4">
        Sign up for early access
      </p>
      <div class="relative w-full md:w-3/5 mx-auto">
        <button type="submit" class="absolute right-6 rounded-full p-3" style="top:15%; right: 11px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="#363844" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
        <input type="hidden" name="form-name" value="waitlist" />
        <div class="p-2 bg-darkblue-800 rounded-full transition-all ease-in-out" :class="{ graded: focused }">
          <input class="w-full py-4 px-4 rounded-full text-sm placeholder-gray-500 bg-white focus:outline-none" type="email" name="email" placeholder="Add your email address"
          @focus="focused = true"
          @blur="focused = false"
          />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
  return {
    focused: false
    }
  }
  }
</script>

<style>
  .graded {
    @apply bg-gradient-to-r from-peach to-sea transition-all ease-in-out
  }
</style>