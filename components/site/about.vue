<template>
    <div class="w-full py-5 flex justify-center items-center bg-white">
      <div class="w-full max-w-[1300px] flex flex-col items-center justify-center sm:items-center sm:justify-center ">
        <div class="sm:w-[600px] text-center sm:h-[150px] flex flex-col">
          <h2 class="sm:text-[30px] text-[18px] font-semibold text-[#434343] mt-2.5">Ao lado dos melhores bancos</h2>
          <p class="sm:text-[15px] text-[12px] font-normal text-[#8a8a8a] break-words">Trabalhamos lado a lado com alguns dos líderes em cada setor para oferecer um portfólio completo e personalizado de produtos e serviços financeiros, que atendam às necessidades específicas de cada cliente.</p>
        </div>
        <SiteCarrocel />
      </div>
    </div>



    <!-- topicos -->
    <div class="w-full py-5 flex justify-center items-center bg-white"> 
      <div class="w-full max-w-[1300px] flex flex-wrap gap-3 items-center justify-center sm:items-center sm:justify-start">
        <div v-for="item in items" :key="item" class="sm:w-[400px] w-full sm:h-[230px] bg-white sm:border sm:border-[#e3e3e3] sm:rounded-md sm:shadow-md flex justify-center items-center transition-all duration-300">
          <div class="sm:w-[380px] w-[95%] sm:h-[210px] flex flex-col justify-start items-start overflow-hidden p-2 ">
            <div class="sm:w-[60px] w-[50px] h-[50px] sm:h-[60px] flex justify-center items-center rounded-[10px] bg-[#00776bd5]">
              <Icon :name="item.icone" class="sm:w-[35px] w-[25px] h-[25px] sm:h-[35px] text-white" />
            </div>
            <h2 class="sm:text-[23px] text-[18px] font-semibold text-[#434343] mt-2.5">{{ item.titalo }}</h2>
            <p class="sm:text-[15px] text-[12px] font-normal text-[#8a8a8a] break-words" style="word-break: break-word; overflow-wrap: break-word;">
              {{ item.descricao }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const items = [
    {
      icone: "material-symbols:tab-close-inactive-rounded",
      titalo: "Muita historia",
      descricao:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      icone: "material-symbols:tab-close-inactive-rounded",
      titalo: "asdasd",
      descricao: "asdasd",
    },
    {
      icone: "material-symbols:tab-close-inactive-rounded",
      titalo: "asdasd",
      descricao: "asdasd",
    },
  ];
  </script>
  

  