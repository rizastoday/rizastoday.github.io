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
            <h2 class="card-title">State Vocational High School 1 Purbalingga</h2>
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

        
        <span class="lg:text-2xl text-xl px-0 font-bold my-4 capitalize">Skills</span>
        <div class="my-2 w-full flex flex-col">
          <div class="form-control flex flex-row items-center" v-for="item in skills">
            <input type="radio" class="radio checked:bg-primary mr-2" :checked="true" disabled>
            <label class="label cursor-pointer">
              <span class="label-text capitalize" v-text="item"></span> 
            </label>
          </div>
        </div>
        
        <span class="lg:text-2xl text-xl px-0 font-bold my-4 capitalize">Projects</span>
        <div class="my-2 w-full flex flex-col">
          <div class="form-control flex flex-row items-center" v-for="item in project">
            <input type="radio" class="radio checked:bg-primary mr-2" :checked="true" disabled>
            <label class="label cursor-pointer">
              <span class="label-text capitalize" v-text="item"></span> 
            </label>
          </div>
        </div>
        
        <span class="lg:text-2xl text-xl px-0 font-bold my-4 capitalize">curriculum vitae</span>
        <div class="my-2 w-full">
          <button class="btn btn-primary btn-accent" @click="downloadCV">
              <Icon :icon="PDF" class="h-5 w-5 m-auto mr-1"/>
            <span>get PDF</span>
          </button>
        </div>


      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import School from '@iconify-icons/mdi/school-outline'
import Work from '@iconify-icons/mdi/work-outline'
import PDF from '@iconify-icons/mdi/file-pdf'

const skills = [
  'adaptability & organizational',
  'team work & communication skills',
  'creative thinking of Application design & architecture',
  'front-end engineer (HTML, CSS, Javascript, Vue.js, jQuery, Bootstrap, TailwindCSS, Vuetify)',
  'back-end engineer (.NET Framework, CodeIgniter, Express.js)',
  'database engineer (MySQL, SQL Server, Firebase)'
]

const project = [
  'asmart & gosafe - digital logsheet web application',
  'pertamina e-workshop - digital equipment repairment monitoring system',
  'CEMS - continuous emission monitoring system for power generator industry',
  'pertamina owner estimate - digital purchasing monitoring system',
  'application management system', 
  'IoT smart monitoring system'
]

const downloadCV = () => {
  window.open('../../public/Riza Afandi - CV.pdf')
}
</script>