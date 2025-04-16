<template>
   <a href="https://api.whatsapp.com/send?phone=5551993350581" target="_blank" class="float">
      <icon name="ph:whatsapp-logo" class="float_icon" />
      <p>Whatsapp</p>
   </a>
</template>

<style scoped>

   .float {
      width: 150px;
      height: 40px;
      display: flex;
      justify-content: center;
      gap: 5px;
      border-radius: 5px;
      align-items: center;
      background: #005C53;
      cursor: pointer;
      transition: .3s;
      position: fixed;
      z-index: 1;
      bottom: 15px !important;
      right: 15px !important;
      margin: 0 !important;
      font-size: 15px;
   }
   
   .float:hover {
      background: #23b458;
   }
   
   .float_icon {
      font-size: 25px;
      color: white;
   }

</style>