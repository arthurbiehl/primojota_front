<template>

   <footer class="w-full flex flex-col items-center bg-[#181818]">

      <div
         class="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full flex flex-col md:flex-row md:gap-0 gap-14 jsutify-start md:items-start items-center mt-20">

         <div
            class="xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] w-full flex flex-col md:items-start items-center gap-y-1">
            <img src="/logo.png" class="md:w-[190px] w-[190px]" alt="">
         </div>

         <div
            class="xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] w-full flex flex-col md:items-start items-center gap-y-1">
            <h2 class="font-medium text-white text-sm mb-2">Links Úteis</h2>
            <a href="/" class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]">Início</a>
            <a href="/contemplados" class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]">Contemplados</a>
            <a href="/consorcios" class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]">Consórcios</a>
            <a href="/desagios" class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]">Deságios</a>
            <a href="/" class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]">Fale Conosco</a>
         </div>

         <div
            class="xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] w-full flex flex-col md:items-start items-center gap-y-1">
            <h2 class="font-medium text-white text-sm mb-2">Redes Sociais</h2>
            <a class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]" href="#">Instagram</a>
            <a class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]" href="#">Facebook</a>
            <a class="font-normal text-[#787878] text-[13px] transition-all hover:text-[#222222]" href="#">BlueSky</a>
         </div>

      </div>




      <div
         class="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full flex md:flex-row flex-col justify-between items-center mt-20 mb-20 md:gap-0 gap-y-10 md:text-base text-center">

         <p class="font-normal text-[#787878] text-[13px]">© {{ new Date().getFullYear() }} <a
               class="font-medium text-white text-[13px]" href="https://DarbyBiehl.com.br">DarbyBiehl</a>. Todos os
            direitos reservados.</p>
         <a class="font-medium text-white text-[13px]" href="#">Políticas de Privacidade</a>

      </div>

   </footer>

</template>

<script setup>


</script>

<style scoped>
.footer_container {
   width: 1300px;
   margin-top: 100px;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
}

.footer_item {
   width: 300px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   row-gap: 3px;
}

.footer_item img {
   width: 140px;
}

.footer_item h2 {
   font-size: 16px;
   font-weight: 500;
   color: #222222;
   margin-bottom: 10px;
}

.footer_item a {
   font-size: 13px;
   font-weight: 500;
   color: #787878;
   transition: .3s;
}

.footer_item a:hover {
   color: #222222;
}

.footer_copyright {
   width: 1300px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 100px;
   margin-top: 50px;
}

.footer_copyright p {
   font-size: 13px;
   font-weight: 500;
   color: #787878;
}

.footer_copyright p a {
   font-size: 13px;
   font-weight: 600;
   color: #222222;
}

.copy {
   font-size: 13px;
   font-weight: 600;
   color: #222222;
}


@media screen and (max-width: 1330px) {

   .footer_container {
      width: 900px;
   }

   .footer_copyright {
      width: 900px;
   }

}

@media screen and (max-width: 930px) {

   .footer_cover {
      height: 300px;
   }

   .footer_cover_text h2 {
      font-size: 30px;
   }

   .footer_container {
      width: 600px;
   }

   .footer_item img {
      width: 100px;
   }

   .footer_copyright {
      width: 600px;
   }

}

@media screen and (max-width: 630px) {

   .footer_cover {
      height: 250px;
   }

   .footer_cover_text h2 {
      font-size: 20px;
   }

   .footer_container {
      width: 100%;
      flex-direction: column;
      align-items: center;
      row-gap: 50px;
   }

   .footer_item {
      width: 100%;
      align-items: center;
   }

   .footer_copyright {
      width: 100%;
      flex-direction: column;
      align-items: center;
      text-align: center;
      row-gap: 30px;
   }

}
</style>