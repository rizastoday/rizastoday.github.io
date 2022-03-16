<template>
  <!-- Navbar -->
  <Navbar :class="navbarClass" class="transition-all"/>

  <!-- Hero -->
  <Hero/>

  <!-- abilities -->
  <!-- <Abilities/> -->

  <!-- about -->
  <About/>


  <!-- resume -->
  <Resume/>

  <!-- Footer -->
  <Footer :dark="global.dark" />
  

  <button class="btn btn-accent h-16 w-16 rounded-full fixed right-3 bottom-3 flex" @click="scrollTop" v-if="topHeight > 400">
    <Icon :icon="Up" class="h-14 w-14 mx-auto" />
  </button>
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