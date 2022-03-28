<template>
  <div id="about" class="lg:px-32 md:px-32 px-7 flex lg:flex-row flex-col justify-center relative py-32 lg:py-64 overflow-x-hidden">
    <div class="lg:w-2/4 w-full lg:my-auto">
      <!-- Heading -->
      <div class="font-sans relative my-auto lg:font-medium font-semibold flex flex-col">
        <span class="lg:text-5xl md:text-4xl text-3xl px-0 font-bold">
          <span >About </span>
          <span>Me</span>
        </span>
        <p class="divider"></p>
        <span class="lg:text-lg md:text-lg px-0 font-normal text-slate-500 dark:text-slate-400 text-justify lg:text-left">
          {{ profil }}
        </span>
        <table class="capitalize text-left mt-10">
          <tr>
            <th class="w-2/6">name</th>
            <td class="w-4/6 font-normal text-slate-500 dark:text-slate-400">riza afandi</td>
          </tr>
          <tr>
            <th class="w-2/6">Date of birth</th>
            <td class="w-4/6 font-normal text-slate-500 dark:text-slate-400">July 24, 2000</td>
          </tr>
          <tr>
            <th class="w-2/6">Address</th>
            <td class="w-4/6 font-normal text-slate-500 dark:text-slate-400">Purbalingga, Central Java, Indonesia</td>
          </tr>
          <tr>
            <th class="w-2/6">E-Mail</th>
            <td class="w-4/6 font-normal text-slate-500 dark:text-slate-400 lowercase">rizaaffandi45@gmail.com</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="lg:w-2/4 lg:visible invisible px-20 lg:flex justify-center items-center">
      <div class="dark:bg-base-300 bg-gray-200 w-full h-full translate-x-8 translate-y-8 rounded-tl-xl rounded-tr-xl rounded-bl-xl" style="border-bottom-right-radius: 200px;">
        <div class="border-accent border-8 w-full h-full translate-x-8 translate-y-8 flex rounded-tl-xl rounded-tr-xl rounded-bl-xl" style="border-bottom-right-radius: 200px;">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

let profil = `I'm a Web Developer. I still young and passionate worker. I am a hard worker who
enjoy new challenges and learning new technologies. I love to working as
a team and you can count on me`
</script>