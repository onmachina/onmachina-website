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
    <form name="waitlist" method="POST" action="/thanks" netlify-honeypot="bot-field" data-netlify="true">
      <p class="text-white mt-12 font-book mb-4">
        Sign up for early access, updates and ways to get involved.
      </p>
      <div class="relative w-full md:w-3/5 mx-auto bg-darkblue-800 p-2 rounded-full">
        <button type="submit" class="absolute right-6 rounded-full p-3 hover:bg-salmon" style="top:17%; right: 14px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="#363844" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
        <input type="hidden" name="form-name" value="waitlist" />
        <input class="w-full py-4 px-4 rounded-full text-sm placeholder-gray-500 bg-gray-300 focus:outline-none focus:ring-salmon focus:border-salmon border-2 border-gray-300" type="email" name="email" placeholder="Add your email address"></input>
      </div>
    </form>
  </div>
</template>