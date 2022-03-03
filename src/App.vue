<template>
  <div class="h-full lg:px-40 md:px-32 px-7 flex flex-col relative overflow-x-hidden">
    <div style="width: 35rem; height: 25rem;" class="absolute lg:top-10 top-52 -left-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-red-500 dark:bg-purple-500 animate-blob animation-delay-2000"></div>
    <div style="width: 35rem; height: 25rem;" class="absolute lg:top-0 top-20 lg:left-40 -left-72 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-yellow-500 dark:bg-gray-500 animate-blob animation-delay-4000"></div>

    <!-- Navbar -->
    <Navbar/>

    <!-- Heading -->
    <div class="font-sans lg:text-7xl md:text-5xl text-4xl lg:font-medium font-semibold relative my-auto">
      <p>Hi, I'm Riza. </p>
      <p>I'm a web developer.</p>
      <p class="divider"></p>
    </div>

    <div class="absolute w-full bottom-1">
      <Dot class="lg:w-96 w-64 ml-auto" :theme="global.dark ? 'white' : 'black'"/>
    </div>

  </div>


  <!-- Footer -->
  <Footer :dark="global.dark" />
  
</template>
<script setup>
import { watch } from 'vue';
import { global } from './functions/global.js'
import Dot from './components/DotComponent.vue'
import Footer from './components/FooterComponent.vue'
import Navbar from './components/NavbarComponent.vue'

watch(() => global.dark, (v, o) => {
  v ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
})
</script>