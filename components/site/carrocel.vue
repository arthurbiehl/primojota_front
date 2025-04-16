<template>
            <div class="overflow-hidden relative w-full bg-white py-6">
  <div class="flex w-max animate-carousel gap-10" style="min-width: max-content;">
    <!-- Grupo duplicado para efeito de loop -->
    <div class="flex gap-10">
      <img src="../../public/banrisul.png" alt="Banrisul" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/ole.png" alt="Olé" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/bmg.png" alt="BMG" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/c6.png" alt="C6" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/crefaz.png" alt="Crefaz" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/facta.png" alt="Facta" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/itau.png" alt="Itaú" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/mercantil.png" alt="Mercantil" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/safra.png" alt="Safra" class="w-[140px] h-[120px] object-contain" />
    </div>
    <div class="flex gap-10">
      <img src="../../public/banrisul.png" alt="Banrisul" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/ole.png" alt="Olé" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/bmg.png" alt="BMG" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/c6.png" alt="C6" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/crefaz.png" alt="Crefaz" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/facta.png" alt="Facta" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/itau.png" alt="Itaú" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/mercantil.png" alt="Mercantil" class="w-[140px] h-[120px] object-contain" />
      <img src="../../public/safra.png" alt="Safra" class="w-[140px] h-[120px] object-contain" />
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