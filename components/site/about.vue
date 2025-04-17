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
      <div class="w-full max-w-[1300px] flex flex-wrap gap-3 items-center justify-center sm:items-center sm:justify-center">

        <!-- topicos -->
        <div v-for="item in items" :key="item" class="sm:w-[400px] w-full sm:h-[200px] bg-white sm:border sm:border-[#e3e3e3] sm:rounded-md sm:shadow-md flex justify-center items-center transition-all duration-300">
          <div class="sm:w-[380px] w-[95%] sm:h-[190px] flex flex-col justify-start items-start overflow-hidden p-2 ">
            <div class="sm:w-[50px] w-[50px] h-[50px] sm:h-[50px] flex justify-center items-center rounded-[10px] bg-[#00776bd5]">
              <Icon :name="item.icone" class="sm:w-[35px] w-[25px] h-[25px] sm:h-[35px] text-white" />
            </div>
            <h2 class="sm:text-[23px] text-[18px] font-semibold text-[#434343] mt-2.5">{{ item.titalo }}</h2>
            <p class="sm:text-[15px] text-[12px] font-normal text-[#8a8a8a] break-words" style="word-break: break-word; overflow-wrap: break-word;">
              {{ item.descricao }}
            </p>
          </div>
        </div>

        <!-- iframe -->
        <div class="sm:w-full lex flex-col items-center">
            <div class="sm:w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.2883944589394!2d-51.1497898!3d-29.827096299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f3071e75d53%3A0x504e22435c8f59b!2sR.%20Prof.%20Francisco%20Brochado%20da%20Rocha%2C%20222%20-%20Centro%2C%20Sapucaia%20do%20Sul%20-%20RS%2C%2093220-680!5e0!3m2!1spt-BR!2sbr!4v1689886083229!5m2!1spt-BR!2sbr"
                    style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    class="w-full rounded-lg mt-[60px] h-[300px]"></iframe>
            </div>
        </div>
      </div>
    </div>

    


  </template>
  
  <script setup>
  const items = [
    {
      icone: "material-symbols:category-search",
      titalo: "O que fazemos?",
      descricao:
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    },
    {
      icone: "material-symbols:category-search",
      titalo: "De onde viemos?",
      descricao: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    },
    {
      icone: "material-symbols:category-search",
      titalo: "Com quem trabalhamos?",
      descricao: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    },
  ];
  </script>
  

  