import { reactive } from "vue";

export const global = reactive({
    dark: localStorage.getItem('theme') ? false : true
})