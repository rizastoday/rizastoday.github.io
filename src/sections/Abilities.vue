<template>
  <div id="abilities" class="lg:px-10 md:px-10 px-7 flex lg:flex-row flex-col justify-center relative py-32 overflow-x-hidden bg-base-200">
    <div class="lg:w-3/5 w-full flex flex-col items-center px-10 lg:order-1 order-2">
      
      <div class="w-full flex flex-col lg:flex-row justify-around items-center">
        <div class="card  lg:w-2/4 mx-4 w-full bg-base-100 shadow-2xl shadow-base-300 my-4">
          <figure class="px-10 pt-10">
            <div class="dark:bg-base-300 bg-base-200 p-5 rounded-lg">
              <Icon :icon="Single" class="h-20 w-20" />
            </div>
          </figure>
          <div class="card-body items-center text-center px-10">
            <h2 class="card-title">Single Page Application</h2>
            <p>Stay fast and lightweight without page refreshing</p>
          </div>
        </div>
        <div class="card  lg:w-2/4 mx-4 w-full bg-base-100 shadow-2xl shadow-base-300 my-4 lg:-mt-8">
          <figure class="px-10 pt-10">
            <div class="dark:bg-base-300 bg-base-200 p-5 rounded-lg">
              <Icon :icon="Multi" class="h-20 w-20" />
            </div>
          </figure>
          <div class="card-body items-center text-center px-10">
            <h2 class="card-title">Multi Page Application</h2>
            <p>Traditional website for complex data operation</p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col lg:flex-row justify-around items-center">
        <div class="card  lg:w-2/4 mx-4 w-full bg-base-100 shadow-2xl shadow-base-300 my-4">
          <figure class="px-10 pt-10">
            <div class="dark:bg-base-300 bg-base-200 p-5 rounded-lg">
              <Icon :icon="Fire" class="h-20 w-20" />
            </div>
          </figure>
          <div class="card-body items-center text-center px-10">
            <h2 class="card-title">Web API</h2>
            <p>Integrating every application platform over the internet</p>
          </div>
        </div>
        <div class="card  lg:w-2/4 mx-4 w-full bg-base-100 shadow-2xl shadow-base-300 my-4 lg:-mt-12">
          <figure class="px-10 pt-10">
            <div class="dark:bg-base-300 bg-base-200 p-5 rounded-lg">
              <Icon :icon="Dots" class="h-20 w-20" />
            </div>
          </figure>
          <div class="card-body items-center text-center px-10">
            <h2 class="card-title">And so on</h2>
            <p>I'm learning new things every day</p>
          </div>
        </div>
      </div>

    </div>
    <div class="lg:w-2/5 w-full lg:order-2 order-1 lg:my-auto">
      <!-- Heading -->
      <div class="font-sans relative my-auto lg:font-medium font-semibold flex flex-col">
        <span class="uppercase text-xl px-0 text-accent">my abilities</span>
        <span class="lg:text-5xl md:text-4xl text-3xl px-0 font-bold">I can make this things</span>
        <!-- <span class="lg:text-4xl md:text-3xl text-xl px-0 text-accent font-normal">I'm a Web Developer</span> -->
        <p class="divider"></p>
      </div>
    </div>
  </div>

</template>
<script setup>
import { Icon } from '@iconify/vue'
import Fire from '@iconify-icons/mdi/fire'
import Single from '@iconify-icons/mdi/newspaper'
import Multi from '@iconify-icons/mdi/newspaper-variant-multiple'
import Dots from '@iconify-icons/mdi/dots-horizontal'
</script>