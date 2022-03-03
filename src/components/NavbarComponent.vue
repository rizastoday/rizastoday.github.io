<template>
    <div class="navbar py-7 relative">
      <div class="flex-1">
        <ul class="menu menu-horizontal p-0 uppercase font-bold" onclick="window.scrollTo(0, 1039)">
          <li><a>contact</a></li>
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
import { onMounted } from 'vue';

onMounted(() => {
  global.dark ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
  themeChange(false)
})

</script>