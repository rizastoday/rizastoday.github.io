<template>
  <div id="hero" class="h-full lg:px-40 md:px-32 px-7 flex flex-col relative overflow-x-hidden">
    <div style="width: 35rem; height: 25rem;" class="absolute lg:top-10 top-52 -right-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-red-500 dark:bg-purple-500 animate-blob animation-delay-2000"></div>
    <div style="width: 35rem; height: 25rem;" class="absolute lg:top-0 top-20 lg:right-40 -right-72 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-yellow-500 dark:bg-gray-500 animate-blob animation-delay-4000"></div>

    <!-- Heading -->
    <div class="font-sans relative my-auto lg:font-medium font-semibold flex flex-col">
      <span class="uppercase text-xl px-0 text-slate-400">hey! i  am</span>
      <span class="lg:text-8xl md:text-7xl text-6xl px-0 font-bold">Riza Afandi</span>
      <p class="divider"></p>
      <span class="lg:text-4xl md:text-3xl text-xl px-0 text-accent font-normal">I'm a Web Developer</span>
    </div>

    <div class="absolute w-full bottom-1">
      <Dot class="lg:w-96 w-64 ml-auto" :theme="global.dark ? 'white' : 'black'"/>
    </div>

  </div>
</template>
<script setup>
import { global } from '../functions/global.js'
import Dot from '../components/DotComponent.vue'
</script>