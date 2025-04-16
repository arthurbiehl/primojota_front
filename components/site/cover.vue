<template>

<div class="w-full h-[400px] bg-white flex items-center justify-center">
  <div class="max-w-[1300px] w-full h-full flex flex-col md:flex-row items-center justify-center px-4">
    <!-- Texto e ícone -->
    <div class="w-650 md:w-1/2 h-full flex flex-col items-left justify-center gap-4">
      <h1 class="text-5xl font-bold text-[#005C53]">FALA COM O JOTA!!</h1>

      <div class="w-[600px] h-[60px] flex items-center justify-left">
        <div class="bg-opacity-10 border border-muted/10 text-white hover:text-white hover:bg-black hover:bg-opacity-30 w-[150px] h-[40px] flex items-center justify-center" variant="outline">
            <Icon name="line-md:briefcase-check" class="text-[50px] text-black size-6" />
            <h2 class="text-black m-[5px]">Contemplados</h2>
        </div>
        
      </div>

    </div>
   
    <!-- Imagem -->
    <div class="w-full md:w-1/2 h-full flex items-center justify-center">
      <img src="../../public/cover_bg.png" alt="Capa" class="max-h-full object-contain" />
    </div>
  </div>
</div>

</template>