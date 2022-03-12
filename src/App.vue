<template>
  <!-- Navbar -->
  <Navbar :class="navbarClass" class="transition-all"/>
  <div id="hero" class="h-full lg:px-40 md:px-32 px-7 flex flex-col relative overflow-x-hidden">
    <div style="width: 35rem; height: 25rem;" class="absolute lg:top-10 top-52 -right-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-red-500 dark:bg-purple-500 animate-blob animation-delay-2000"></div>
    <div style="width: 35rem; height: 25rem;" class="absolute lg:top-0 top-20 lg:right-40 -right-72 rounded-full mix-blend-multiply filter blur-2xl opacity-70 bg-yellow-500 dark:bg-gray-500 animate-blob animation-delay-4000"></div>

    <!-- Heading -->
    <div class="font-sans relative my-auto lg:font-medium font-semibold flex flex-col">
      <span class="uppercase text-xl px-0 text-slate-400">hey! i  am</span>
      <span class="lg:text-8xl md:text-7xl text-6xl px-0 font-bold">Riza Afandi</span>
      <p class="divider"></p>
      <span class="lg:text-4xl md:text-3xl text-xl px-0 text-accent font-normal">I'm a Web Developer</span>
    </div>

    <div class="absolute w-full bottom-1">
      <Dot class="lg:w-96 w-64 ml-auto" :theme="global.dark ? 'white' : 'black'"/>
    </div>

  </div>

  <!-- abilities -->
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


  <!-- about -->
  <div id="about" class="lg:px-40 md:px-32 px-7 flex lg:flex-row flex-col justify-center relative py-32 overflow-x-hidden">
    <div class="lg:w-2/4 w-full lg:my-auto">
      <!-- Heading -->
      <div class="font-sans relative my-auto lg:font-medium font-semibold flex flex-col">
        <span class="lg:text-5xl md:text-4xl text-3xl px-0 font-bold">About Me</span>
        <p class="divider"></p>
        <span class="lg:text-xl md:text-lg px-0 font-normal text-slate-400">I'm a Web Developer. I have a passion to creating Clean, Beautiful & Interactive Web Application </span>
        <table class="capitalize text-left mt-10">
          <tr>
            <th>name</th>
            <td class="text-slate-400">riza afandi</td>
          </tr>
          <tr>
            <th>Date of birth</th>
            <td class="text-slate-400">July 24, 2000</td>
          </tr>
          <tr>
            <th>Address</th>
            <td class="text-slate-400">Purbalingga, Central Java, Indonesia</td>
          </tr>
          <tr>
            <th>E-Mail</th>
            <td class="text-slate-400 lowercase">rizaaffandi45@gmail.com</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="lg:w-2/4 lg:visible invisible px-20 lg:flex justify-center items-center">
      <div class="dark:bg-base-300 bg-base-300 w-full h-full -translate-x-8 -translate-y-8 rounded-lg">
        <div class="border-accent border-8 w-full h-full translate-x-8 translate-y-8 rounded-lg"></div>
      </div>
    </div>
  </div>


  <!-- resume -->
  <div id="resume" class="lg:px-40 md:px-32 px-7 flex flex-col justify-center relative py-32 overflow-x-hidden">
        <span class="lg:text-5xl md:text-4xl text-3xl px-0 font-bold text-center">Resume</span>
        <p class="divider"></p>
        <div class="flex lg:flex-row flex-col w-full">
          <!-- <div class="lg:w-1/4 w-full lg:block">
            <ul class="menu menu-compact static top-64">
              <li class="hover-bordered"><a>Education</a></li>
              <li class="hover-bordered"><a>Experiences</a></li>
              <li class="hover-bordered"><a>Skills</a></li>
            </ul>
          </div> -->
          <div class="lg:w-3/4 w-full mx-auto flex flex-col">
            <span class="lg:text-2xl text-xl px-0 font-bold mb-4">Education</span>
            <div class="card w-full bg-base-200 hover:shadow-xl transition-all flex flex-row my-2">
              <div class="px-10 py-8 flex">
                <div class="dark:bg-base-300 bg-base-300 h-14 w-14 rounded-full mx-auto flex">
                  <Icon :icon="School" class="h-10 w-10 m-auto"/>
                </div>
              </div>
              <div class="card-body pl-0">
                <p>2016-2019</p>
                <h2 class="card-title">SMKN 1 Purbalingga</h2>
                <p>Software Engineering (RPL) Departement</p>
              </div>
            </div>

            
            <span class="lg:text-2xl text-xl px-0 font-bold my-4">Experiences</span>
            <div class="card w-full bg-base-200 hover:shadow-xl transition-all flex flex-row my-2">
              <div class="px-10 py-8 flex">
                <div class="dark:bg-base-300 bg-base-300 h-14 w-14 rounded-full mx-auto flex">
                  <Icon :icon="Work" class="h-10 w-10 m-auto"/>
                </div>
              </div>
              <div class="card-body pl-0">
                <p>2017-2018</p>
                <h2 class="card-title">Nocola IoT Solution</h2>
                <p>Software Engineering Internship</p>
              </div>
            </div>
            <div class="card w-full bg-base-200 hover:shadow-xl transition-all flex flex-row my-2">
              <div class="px-10 py-8 flex">
                <div class="dark:bg-base-300 bg-base-300 h-14 w-14 rounded-full mx-auto flex">
                  <Icon :icon="Work" class="h-10 w-10 m-auto"/>
                </div>
              </div>
              <div class="card-body pl-0">
                <p>2019-Present</p>
                <h2 class="card-title">Nocola IoT Solution</h2>
                <p>Fulltime Fullstack Web Developer</p>
              </div>
            </div>

            
            <span class="lg:text-2xl text-xl px-0 font-bold my-4">Skills</span>
            <div class="my-2 w-full flex lg:flex-row flex-col">
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>Adaptability</span>
                  <span>90%</span>
                </label>
                <progress class="progress w-full" value="90" max="100"></progress>
              </div>
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>Teamwork</span>
                  <span>95%</span>
                </label>
                <progress class="progress w-full" value="95" max="100"></progress>
              </div>
            </div>
            <div class="my-2 w-full flex lg:flex-row flex-col">
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>Communication</span>
                  <span>90%</span>
                </label>
                <progress class="progress w-full" value="90" max="100"></progress>
              </div>
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>Organizational</span>
                  <span>85%</span>
                </label>
                <progress class="progress w-full" value="85" max="100"></progress>
              </div>
            </div>
            <div class="my-2 w-full flex lg:flex-row flex-col">
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>Vue.js</span>
                  <span>80%</span>
                </label>
                <progress class="progress w-full" value="80" max="100"></progress>
              </div>
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>.NET Framework</span>
                  <span>75%</span>
                </label>
                <progress class="progress w-full" value="75" max="100"></progress>
              </div>
            </div>
            <div class="my-2 w-full flex lg:flex-row flex-col">
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>CSS</span>
                  <span>80%</span>
                </label>
                <progress class="progress w-full" value="80" max="100"></progress>
              </div>
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>SQL </span>
                  <span>70%</span>
                </label>
                <progress class="progress w-full" value="70" max="100"></progress>
              </div>
            </div>
            <div class="my-2 w-full flex lg:flex-row flex-col">
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>PHP Framework</span>
                  <span>70%</span>
                </label>
                <progress class="progress w-full" value="70" max="100"></progress>
              </div>
              <div class="flex flex-col w-full lg:w-2/4 px-2">
                <label class="flex flex-row justify-between mb-2">
                  <span>Express.js </span>
                  <span>40%</span>
                </label>
                <progress class="progress w-full" value="40" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
  </div>

  <!-- contact -->
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
import Dot from './components/DotComponent.vue'
import Footer from './components/FooterComponent.vue'
import Navbar from './components/NavbarComponent.vue'
import { Icon } from '@iconify/vue'
import Fire from '@iconify-icons/mdi/fire'
import Single from '@iconify-icons/mdi/newspaper'
import Multi from '@iconify-icons/mdi/newspaper-variant-multiple'
import Dots from '@iconify-icons/mdi/dots-horizontal'
import School from '@iconify-icons/mdi/school-outline'
import Work from '@iconify-icons/mdi/work-outline'
import Up from '@iconify-icons/mdi/chevron-up'

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