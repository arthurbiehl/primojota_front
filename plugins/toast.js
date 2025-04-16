import { defineNuxtPlugin } from '#app';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {

  // Exponha o ToastService no Nuxt App
  nuxtApp.provide('toast', useToast());
});