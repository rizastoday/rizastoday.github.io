<template>
  <div class="h-full lg:px-60 px-7 flex flex-col relative overflow-x-hidden">
    <div class="lg:w-96 lg:h-96 w-72 h-72 absolute lg:top-10 top-48 left-0 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-red-500 dark:bg-purple-500 animate-blob animation-delay-2000"></div>
    <div class="lg:w-96 lg:h-96 w-72 h-72 absolute lg:top-0 top-36 lg:left-40 left-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-yellow-500 dark:bg-gray-500 animate-blob animation-delay-4000"></div>

    <!-- Navbar -->
    <div class="navbar py-7 relative">
      <div class="flex-1 justify-end">
        <!-- Theme Switch -->
        <label class="swap swap-rotate">
          <input data-toggle-theme="emerald" type="checkbox" v-model="dark"/>
          <Icon :icon="Sun" class="swap-on fill-current w-14 h-14"/>
          <Icon :icon="Moon" class="swap-off fill-current w-14 h-14"/>
        </label>
      </div>
    </div>

    <!-- Heading -->
    <div class="lg:font-serif font-sans lg:text-7xl text-4xl lg:font-medium font-semibold my-auto relative">
      <p>Hi, I'm Riza. </p>
      <p>I'm a web developer.</p>
      <p class="divider"></p>
    </div>

    <div class="absolute w-full flex bottom-1 right-11">
      <img src="./assets/dots.png" class="lg:w-96 w-64 ml-auto"/>
    </div>

  </div>
  
  <!-- Footer -->
  <div class="lg:px-60 px-7 py-56 flex flex-col relative overflow-x-hidden">
    <div class="lg:w-96 lg:h-80 w-72 h-60 absolute lg:top-20 top-36 lg:right-40 right-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-green-500 dark:bg-gray-500 animate-blob animation-delay-4000"></div>
    <div class="lg:w-96 lg:h-80 w-72 h-60 absolute lg:top-24 top-48 right-0 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-blue-500 dark:bg-purple-500 animate-blob animation-delay-2000"></div>
    
    <p class="lg:font-serif font-sans uppercase font-semibold text-center text-3xl py-10 relative"> find me </p>
    <div class="flex flex-row justify-around w-2/12 mx-auto relative">
      <button class="btn btn-ghost btn-circle h-14 w-14 hover:text-red-700" @click.prevent="gmailAction">
        <Icon :icon="GMail" class="h-7 w-7 " />
      </button>
      <button class="btn btn-ghost btn-circle h-14 w-14 hover:text-gray-800" @click.prevent="githubAction">
        <Icon :icon="Github" class="h-7 w-7 " />
      </button>
      <button class="btn btn-ghost btn-circle h-14 w-14 hover:text-blue-800" @click.prevent="linkedInAction">
        <Icon :icon="LinkedIn" class="h-7 w-7 " />
      </button>
      <button class="btn btn-ghost btn-circle h-14 w-14 hover:text-red-700" @click.prevent="instagramAction">
        <Icon :icon="Instagram" class="h-7 w-7 " />
      </button>
    </div>

    <div class="absolute w-full flex bottom-1 left-11">
      <img src="./assets/dots.png" class="lg:w-96 w-64 mr-auto"/>
    </div>
    
  </div>


  

</template>
<script setup>
import { themeChange } from 'theme-change'
import { onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue'
import Instagram from '@iconify-icons/mdi/instagram'
import Github from '@iconify-icons/mdi/github'
import LinkedIn from '@iconify-icons/mdi/linkedin'
import GMail from '@iconify-icons/mdi/gmail'
import Moon from '@iconify-icons/mdi/weather-night'
import Sun from '@iconify-icons/mdi/weather-sunny'

let dark = ref( localStorage.getItem('theme') ? false : true )
watch(() => dark.value, (v, o) => {
  v ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
})
onMounted(() => {
  dark.value ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
  themeChange(false)
})

const gmailAction = _ => location.href = 'mailto:rizaaffandi45@gmail.com'
const githubAction = _ => location.href = 'https://github.com/rizastoday/'
const instagramAction = _ => location.href = 'https://www.instagram.com/rizaaf__'
const linkedInAction = _ => location.href = 'https://www.linkedin.com/in/rzstdy/'
</script>