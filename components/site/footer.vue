<template>
   
    <footer class="footer_container">
                   
       <div class="i_f_header">
          
          <div class="i_f_item">
             
             <div class="logo_footer">
                <img src="/logo.png" alt="">
             </div>
             
          </div>
          
          <div class="i_f_item">
             
             <h2>Links Úteis</h2>
             <a href="#">Início</a>
             <a href="#">Ações</a>
             <a href="#">Sobre Nós</a>
             
          </div>
          <div class="i_f_item">
             
             <h2>Nossas Redes</h2>
             <a href="#">Instagram</a>
             <a href="#">Facebook</a>
             
          </div>
          
          
       </div>
       
       <div class="i_f_bott">
          
          <p>© {{new Date().getFullYear()}} <a href="https://darbybiehl.com.br">DarbyBiehl</a>. Todos os direitos reservados.</p>
          <a href="#">Políticas de Privacidade</a>
          
       </div>
          
       
    </footer>
 
    
 </template>
 
 <style scoped>
 
    /* footer */
    
    .footer_container {
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
       background: #181818;
       padding: 100px 0px;
       row-gap: 80px;
       margin-top: 100px;
    }
    
    .i_f_header {
       width: 1000px;
       display: flex;
       justify-content: flex-start;
       align-items: flex-start;
    }
    
    .i_f_item {
       width: 300px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
    }
    
    .logo_footer {
       display: flex;
       justify-content: flex-start;
       align-items: center;
       column-gap: 10px;
    }
    
    .logo_footer img {
       width: 100%;
       height: 100%;
    }
    
    .logo_footer h2 {
       color: white;
       font-size: 18px;
       font-weight: 500;
       margin: 0 !important;
    }
    
    
    .i_f_item h2 {
       font-size: 16px;
       font-weight: 500;
       color: #d1d1d1;
       margin-bottom: 20px;
    }
    
    .i_f_item a {
       font-size: 13px;
       font-weight: 300;
       color: white;
       margin-bottom: 5px;
       transition: .3s;
       cursor: pointer;
    }
    
    .i_f_item a:hover {
       color: #c1b5ff;
    }
    
    .i_f_bott {
       width: 1000px;
       display: flex;
       justify-content: space-between;
       align-items: flex-start;
    }
    
    .i_f_bott p {
       color: white;
       font-size: 13px;
       font-weight: 300;
    }
    
    .i_f_bott p a {
       font-weight: 500;
       font-size: 13px;
       color: white;
       transition: .3s;
    }
    
    .i_f_bott p a:hover {
       color: #444444;
    }
    
    .i_f_bott a {
       font-weight: 500;
       font-size: 13px;
       color: white;
       transition: .3s;
    }
    
    .i_f_bott a:hover {
       color: #444444;
    }
    
    @media screen and (max-width: 1310px) {
       
       .i_f_header {
          width: 900px;
       }
       
       .i_f_item {
          width: 250px;
       }
       
       .i_f_item h2 {
          font-size: 16px;
       }
       
       .i_f_item a {
          font-size: 13px;
       }
       
       .i_f_bott {
          width: 900px;
       }
       
       .i_f_bott p {
          font-size: 13px;
       }
       
       .i_f_bott p a {
          font-weight: 400;
          font-size: 13px;
       }
       
       .i_f_bott a {
          font-weight: 400;
          font-size: 13px;
       }
       
    }
 
    @media screen and (max-width: 910px) {
       
       .i_f_header {
          width: 600px;
       }
       
       .i_f_item {
          width: 200px;
       }
       
       .i_f_item h2 {
          font-size: 14px;
       }
       
       .i_f_bott {
          width: 600px;
       }
       
    }
 
    @media screen and (max-width: 610px) {
       
       .i_f_header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          row-gap: 30px;
       }
       
       .i_f_item {
          width: 200px;
          align-items: center;
          text-align: center;
       }
       
       .i_f_bott {
          width: 100%;
          flex-direction: column;
          align-items: center;
          text-align: center;
          row-gap: 30px;
       }
       
    }
 </style>