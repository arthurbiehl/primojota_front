<template>
  <div class="w-full min-h-screen flex justify-center items-center bg-white p-4">
    <div class="w-full max-w-[1300px] flex flex-col-reverse md:flex-row items-start gap-6">
      <div class="w-full h-[300px] md:w-1/2 flex flex-col justify-center items-center items-start space-y-4">
        <h1 class="text-[35px] text-center md:text-[50px] font-bold text-[#005C53]">Fala com o JOTA!</h1>

        <!--
                <p class="text-[15px] md:text-[16px] text-gray-700 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut accusantium explicabo rem illo. Iste magni minus, repudiandae harum tempore atque quos temporibus sint reiciendis reprehenderit. Sed nemo dicta distinctio.
        </p>
        -->

        <div class="w-[400px] sm:flex-col items-start sm:items-center justify-center">
          <div class=" sm:h-[60px] flex sm:items-center gap-2 sm:justify-start bg-[#005C53] bg-opacity-80 px-4 py-2 rounded-[10px] rounded border border-gray-300 gap-y-2">
            <div class="sm:w-[40px] w-[30px] h-[30px] sm:h-[40px] flex justify-center items-center rounded-[10px] border-2 border-white">
              <Icon name="material-symbols:attach-money-rounded" class="sm:w-5 sm:h-5 w-4 h-4" />
            </div>
            <p class="text-[15px] font-[500]">Crédito Consignado</p>
          </div>
          <div class=" sm:h-[60px] flex sm:items-center gap-2 sm:justify-start bg-[#005C53] bg-opacity-80 px-4 py-2 rounded-[10px] rounded border border-gray-300 gap-y-2">
            <div class="sm:w-[40px] w-[30px] h-[30px] sm:h-[40px] flex justify-center items-center rounded-[10px] border-2 border-white">
              <Icon name="material-symbols:card-travel-outline" class="sm:w-5 sm:h-5 w-4 h-4" />
            </div>
            <p class="text-[15px] font-[500]">Antecipacao de FGTS</p>
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
