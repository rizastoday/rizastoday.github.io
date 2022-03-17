<template>
  <!-- Navbar -->
  <Navbar :class="navbarClass" class="transition-all"/>

  <!-- Hero -->
  <Hero/>

  <!-- abilities -->
  <!-- <Abilities/> -->

  <!-- about -->
  <About class="dark:bg-gray-900"/>


  <!-- resume -->
  <Resume class="dark:bg-gray-900"/>

  <!-- Footer -->
  <Footer :dark="global.dark" class="dark:bg-gray-900" />
  

  <Icon :icon="Up" class="h-20 w-20 mx-auto fixed right-3 bottom-3 cursor-pointer dark:text-accent" @click="scrollTop" v-if="topHeight > 400" />
</template>
<script setup>
import { themeChange } from 'theme-change'
import { onMounted, ref, watch } from 'vue';
import { global } from './functions/global.js'
import Footer from './components/FooterComponent.vue'
import Navbar from './components/NavbarComponent.vue'
import { Icon } from '@iconify/vue'
import Up from '@iconify-icons/mdi/chevron-up'
import Hero from './sections/Hero.vue';
// import Abilities from './sections/Abilities.vue'
import About from './sections/About.vue';
import Resume from './sections/Resume.vue';

watch(() => global.dark, (v, o) => {
  v ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
})

const scrollTop = () => window.scrollTo(0,0)
const topHeight = ref()
let navbarClass = ref()
onMounted(() => {
  global.dark ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
  themeChange(false)

  window.onscroll = () => {
    topHeight.value = window.scrollY;
    if(window.scrollY > 0){
      navbarClass.value = 'glass'
    }else {
      navbarClass.value = null
    }
  }
})
</script>