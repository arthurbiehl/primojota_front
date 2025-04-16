import Aura from '@primevue/themes/aura';
import Material from '@primevue/themes/material';
import Lara from '@primevue/themes/lara';
import Nora from '@primevue/themes/nora';

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@primevue/nuxt-module",
    "@nuxtjs/leaflet"
  ],

  icon: {
    mode: "svg",
  },
  colorMode: {
    preference: 'dark', // Sempre começa no modo escuro
    fallback: 'dark', // Caso não consiga detectar, usa escuro
    classSuffix: "",
  },
  imports: {
    dirs: ["./stores"],
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark'
        }
      },
    },
    components: {
      prefix: 'Prime'
    }
  },
  
  plugins: [
    { src: '~/plugins/toast.js', mode: 'client' },
  ],
  // setups
  pinia: {
    storesDirs: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL || "http://127.0.0.1:8000/api",
    },
  },
});
