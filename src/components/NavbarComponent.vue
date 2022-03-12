<template>
    <div class="navbar py-7 fixed w-full z-10  lg:px-40 md:px-32 px-7 shadow-none">
      <div class="flex-1">
        <ul class="menu menu-horizontal p-0 uppercase font-bold text-xs lg:text-lg">
          <li><a @click.prevent="scrollTo('abilities')">abilities</a></li>
          <li><a @click.prevent="scrollTo('about')">about</a></li>
          <li><a @click.prevent="scrollTo('resume')">resume</a></li>
          <li><a @click.prevent="scrollTo('footer')">contact</a></li>
        </ul>
      </div>
      <div class="flex-none">
        <!-- Theme Switch -->
        <label class="swap swap-rotate">
          <input data-toggle-theme="light" type="checkbox" v-model="global.dark"/>
          <Icon :icon="Sun" class="swap-on fill-current w-14 h-14"/>
          <Icon :icon="Moon" class="swap-off fill-current w-14 h-14"/>
        </label>
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
  let abilitiesHeight = document.querySelector('#abilities').offsetHeight;
  let aboutHeight = document.querySelector('#about').offsetHeight;
  let resumeHeight = document.querySelector('#resume').offsetHeight;
  
  switch (dom) {
    case 'abilities':
      window.scrollTo(0, heroHeight)
      break;
    case 'about':
      window.scrollTo(0, heroHeight + abilitiesHeight)
      break;
    case 'resume':
      window.scrollTo(0, heroHeight + abilitiesHeight + aboutHeight)
      break;
    case 'footer':
      window.scrollTo(0, heroHeight + abilitiesHeight + aboutHeight + resumeHeight)
      break;
  
    default:
      window.scrollTo(0,0)
      break;
  }
}
</script>