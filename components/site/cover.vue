<template>
  <div class="w-full min-h-screen flex justify-center items-center bg-white p-4">
    <div class="w-full max-w-[1300px] flex flex-col-reverse md:flex-row items-start gap-6">
      <div class="w-full md:w-1/2 flex flex-col items-start space-y-4">
        <h1 class="text-[35px] md:text-[50px] font-bold text-[#005C53]">FALA COM O JOTA</h1>
        <p class="text-[15px] md:text-[18px] text-gray-700 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut accusantium explicabo rem illo. Iste magni minus, repudiandae harum tempore atque quos temporibus sint reiciendis reprehenderit. Sed nemo dicta distinctio.
        </p>
        <div class="w-full sm:flex-row items-start sm:items-center">
          <div class="flex h-[45px] hover:h-[50px] duration-150 sm:items-center bg-[#005C53] gap-2 bg-opacity-80 px-4 py-2 rounded border border-gray-300">
            <Icon name="material-symbols:card-travel-outline" class="w-5 h-5" />
            <p class="text-[13px] md:text-[15px] font-semibold font-[700]">Consorcio</p>
          </div>
          <div class="flex h-[45px] hover:h-[50px] duration-150 sm:items-center bg-[#005C53] gap-2 bg-opacity-80 px-4 py-2 rounded border border-gray-300">
            <Icon name="material-symbols:attach-money" class="w-5 h-5" />
            <p class="text-[13px] md:text-[15px] font-semibold font-[700]">Dinhelo</p>
          </div>
          <div class="flex h-[45px] hover:h-[50px] duration-150 sm:items-center bg-[#005C53] gap-2 bg-opacity-80 px-4 py-2 rounded border border-gray-300">
            <Icon name="material-symbols:money-bag-outline" class="w-5 h-5" />
            <p class="text-[13px] md:text-[15px] font-semibold font-[700]">Comtempladas</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 h-[300px] md:h-[500px] flex justify-center items-center">
        <img src="/cover.png" alt="" class="w-full h-full object-cover rounded" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
