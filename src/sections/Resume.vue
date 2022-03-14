<template>
  <div id="resume" class="lg:px-40 md:px-32 px-7 flex flex-col justify-center relative lg:py-36 py-32 overflow-x-hidden">
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
</template>
<script setup>
import { Icon } from '@iconify/vue'
import School from '@iconify-icons/mdi/school-outline'
import Work from '@iconify-icons/mdi/work-outline'
</script>