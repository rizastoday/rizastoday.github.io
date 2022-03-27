<template>
    <div class="navbar fixed w-full z-10  lg:px-40 md:px-32 px-7 shadow-none">
      <div class="flex-1">
        <ul class="menu menu-horizontal p-0 uppercase font-bold text-xs lg:text-lg">
          <!-- <li><a @click.prevent="scrollTo('abilities')">abilities</a></li> -->
          <li><a @click.prevent="scrollTo('about')">about</a></li>
          <li><a @click.prevent="scrollTo('resume')">resume</a></li>
          <li><a @click.prevent="scrollTo('footer')">contact</a></li>
        </ul>
      </div>
      <div class="flex-none">
        <!-- Theme Switch -->

        <input data-toggle-theme="light"  type="checkbox" class="toggle toggle-accent" v-model="global.dark">
      </div>
    </div>
</template>
<script setup>
import { global } from '../functions/global.js'
import { themeChange } from 'theme-change'
import { Icon } from '@iconify/vue'
import Moon from '@iconify-icons/mdi/weather-night'
import Sun from '@iconify-icons/mdi/weather-sunny'

const scrollTo = (dom) => {
  let heroHeight = document.querySelector('#hero').offsetHeight;
  // let abilitiesHeight = document.querySelector('#abilities').offsetHeight;
  let aboutHeight = document.querySelector('#about').offsetHeight;
  let resumeHeight = document.querySelector('#resume').offsetHeight;
  
  switch (dom) {
    case 'about':
      window.scrollTo(0, heroHeight)
      break;
    case 'resume':
      window.scrollTo(0, heroHeight + aboutHeight)
      break;
    case 'footer':
      window.scrollTo(0, heroHeight + aboutHeight + resumeHeight)
      break;
  
    default:
      window.scrollTo(0,0)
      break;
  }
}
</script>