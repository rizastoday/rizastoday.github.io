<template>
  <div id="resume" class="lg:px-40 md:px-32 px-7 flex flex-col justify-center relative lg:py-36 py-32 overflow-x-hidden">
    <span class="lg:text-5xl md:text-4xl text-3xl px-0 font-bold text-center">Resume</span>
    <p class="divider"></p>
    <div class="flex lg:flex-row flex-col w-full">


      <div class="lg:w-3/4 w-full mx-auto flex flex-col">
        <template v-for="item in resume">
          <span class="lg:text-2xl text-xl px-0 font-bold mb-4 capitalize" v-text="item.title"></span>
          <div v-for="child in item.content" class="card w-full bg-gray-100 dark:bg-gray-800 hover:shadow-xl transition-all flex flex-row my-2">
            <div class="px-10 py-8 lg:flex hidden">
              <div class="dark:bg-base-300 bg-base-300 h-14 w-14 rounded-full mx-auto flex">
                <Icon :icon="item.icon" class="h-10 w-10 m-auto"/>
              </div>
            </div>
            <div class="card-body px-10 lg:px-0">
              <p class="dark:text-slate-400 text-gray-800" v-text="child.year"></p>
              <h2 class="card-title capitalize" v-text="child.title"></h2>
              <p class="dark:text-slate-400 text-gray-800 capitalize" v-text="child.desc"></p>
            </div>
          </div>
        </template>

        
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
          <button class="btn btn-accent dark:bg-gradient-to-br dark:from-primary dark:to-accent dark:border-none" @click="downloadCV">
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

const resume = [
  {
    title: 'education',
    icon: School,
    content: [
      {
        year: '2016-2019',
        title: 'state vocational high school 1 purbalingga',
        desc: 'software engineering (RPL) departemen'
      }
    ]
  },
  {
    title: 'experiences',
    icon: Work,
    content: [
      {
        year: '2017-2018',
        title: 'nocola IoT solution',
        desc: 'software engineering internship'
      },
      {
        year: '2019-present',
        title: 'nocola IoT solution',
        desc: 'fulltime fullstack web developer'
      }
    ]
  }
]

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
  window.open('./Riza Afandi - CV.pdf')
}
</script>