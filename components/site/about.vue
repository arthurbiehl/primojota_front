<template>
    <div class="w-full py-5 flex justify-center items-center bg-white">
      <div class="w-full max-w-[1300px] flex flex-wrap gap-3 items-center justify-center sm:items-center sm:justify-start">
        <div v-for="item in items" :key="item" class="w-[400px] h-[250px] bg-white border border-[#e3e3e3] rounded-md shadow-md flex justify-center items-center transition-all duration-300">
          <div class="w-[350px] h-[200px] flex flex-col justify-start items-start overflow-hidden p-2 ">
            <div class="w-[70px] h-[70px] flex justify-center items-center rounded-[10px] bg-[#00776bd5]">
              <Icon :name="item.icone" class="w-[35px] h-[35px] text-white" />
            </div>
            <h2 class="text-[23px] font-semibold text-[#434343] mt-2.5">{{ item.titalo }}</h2>
            <p class="text-[15px] font-normal text-[#8a8a8a] break-words" style="word-break: break-word; overflow-wrap: break-word;">
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
  
  <style scoped></style>
  