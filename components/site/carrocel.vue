<template>
  <div class="overflow-hidden relative w-full bg-white py-6">
  <div class="flex w-max animate-carousel gap-10" style="min-width: max-content;">
    <!-- Grupo duplicado para efeito de loop -->
    <div class="flex gap-10">
      <img src="../../public/banrisul.png" alt="Banrisul" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/ole.png" alt="Olé" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/bmg.png" alt="BMG" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/c6.png" alt="C6" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/crefaz.png" alt="Crefaz" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/facta.png" alt="Facta" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/itau.png" alt="Itaú" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/mercantil.png" alt="Mercantil" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/safra.png" alt="Safra" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
    </div>
    <div class="flex gap-10">
      <img src="../../public/banrisul.png" alt="Banrisul" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/ole.png" alt="Olé" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/bmg.png" alt="BMG" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/c6.png" alt="C6" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/crefaz.png" alt="Crefaz" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/facta.png" alt="Facta" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/itau.png" alt="Itaú" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/mercantil.png" alt="Mercantil" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
      <img src="../../public/safra.png" alt="Safra" class="sm:w-[140px] w-[100px] h-[120px] object-contain" />
    </div>
  </div>
</div>
</template>

<style>
@keyframes carousel {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-carousel {
  animation: carousel 30s linear infinite;
}
</style>