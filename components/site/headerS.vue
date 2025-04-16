<template>
  <header class="w-full flex justify-center bg-white items-center p-2.5 bg-fixed top-0 z-50">
    <div class="w-full h-[70px] bg-[#005C53] rounded-[5px] flex items-center px-5">
      <div class="flex items-center gap-2.5 w-1/3">
        <img src="/logo.png" alt="Logo" class="w-[120px] h-[120px] object-contain" />
      </div>
      <div class="hidden md:flex items-center gap-5 justify-center w-1/3">
        <a href="/" class="text-[14px] text-[#d5d5d5] font-[700] hover:text-white transition duration-300">Início</a>
        <a href="/" class="text-[14px] text-[#d5d5d5] font-[700] hover:text-white transition duration-300">Ações</a>
        <a href="/" class="text-[14px] text-[#d5d5d5] font-[700] hover:text-white transition duration-300">Sobre Nós</a>
      </div>
      <icon @click="modalState = true" name="ph:text-align-right-light" class="text-white text-[33px] p-[3px] rounded-[3px] cursor-pointer hover:bg-[#292929] transition duration-300 md:hidden ml-auto" />
    </div>
  </header>
  <Transition name="mobile_menu">
    <div class="fixed inset-0 z-10 backdrop-blur-[10px]" v-if="modalState">
      <div class="fixed top-0 left-0 w-full flex flex-col items-center bg-[#005C53] p-5 z-11">
        <div class="w-full flex justify-between items-center">
          <img src="/logo.png" alt="Logo" class="w-[90px] h-[50px] object-contain" />
          <icon class="text-white text-[27px] p-[3px] rounded-[4px] cursor-pointer hover:bg-[#005C53] transition duration-300" name="ph:x-bold" @click="modalState = false" />
        </div>
        <div class="w-full flex flex-col items-center mt-[30px]">
          <div class="w-full flex flex-col items-center gap-[15px] font-light">
            <a class="text-white text-[13px] font-[700] hover:text-[#bbbbbb] transition duration-300" href="/">Início</a>
            <a class="text-white text-[13px] font-[700] hover:text-[#bbbbbb] transition duration-300" href="/">Ações</a>
            <a class="text-white text-[13px] font-[700] hover:text-[#bbbbbb] transition duration-300" href="/">Sobre Nós</a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
  import { ref } from 'vue'
  const modalState = ref(false);
  const token = useCookie('token').value;
</script>
