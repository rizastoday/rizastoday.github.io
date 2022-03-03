<template>
  <div class="flex flex-col justify-center relative py-72 overflow-x-hidden">
    <div class="lg:w-96 lg:h-80 w-72 h-60 absolute lg:top-20 top-36 lg:right-40 right-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-green-500 dark:bg-gray-500 animate-blob animation-delay-4000"></div>
    <div class="lg:w-96 lg:h-80 w-72 h-60 absolute lg:top-24 top-48 right-0 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-blue-500 dark:bg-purple-500 animate-blob animation-delay-2000"></div>
    
    <p class="font-sans uppercase font-semibold text-center text-3xl relative"> find me </p>
    <div class="flex flex-row justify-around w-2/12 mx-auto relative">
      <button name="gmail" class="btn btn-ghost btn-circle h-14 w-14 hover:text-red-700" @click.prevent="gmailAction">
        <Icon :icon="GMail" class="h-7 w-7 " />
      </button>
      <button name="github" class="btn btn-ghost btn-circle h-14 w-14 hover:text-gray-800" @click.prevent="githubAction">
        <Icon :icon="Github" class="h-7 w-7 " />
      </button>
      <button name="linkedin" class="btn btn-ghost btn-circle h-14 w-14 hover:text-blue-800" @click.prevent="linkedInAction">
        <Icon :icon="LinkedIn" class="h-7 w-7 " />
      </button>
      <button name="instagram" class="btn btn-ghost btn-circle h-14 w-14 hover:text-red-700" @click.prevent="instagramAction">
        <Icon :icon="Instagram" class="h-7 w-7 " />
      </button>
    </div>

    <div class="absolute w-full bottom-1">
      <Dot class="lg:w-96 w-64 mr-auto" :theme="dark ? 'white' : 'black'"/>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import Dot from './DotComponent.vue'
import Instagram from '@iconify-icons/mdi/instagram'
import Github from '@iconify-icons/mdi/github'
import LinkedIn from '@iconify-icons/mdi/linkedin'
import GMail from '@iconify-icons/mdi/gmail'

defineProps({
    dark: {
        type: Boolean,
        default: false
    }
})


const gmailAction = _ => location.href = 'mailto:rizaaffandi45@gmail.com'
const githubAction = _ => location.href = 'https://github.com/rizastoday/'
const instagramAction = _ => location.href = 'https://www.instagram.com/rizaaf__'
const linkedInAction = _ => location.href = 'https://www.linkedin.com/in/rzstdy/'
</script>