<template>
   <footer id="footer">
      <div class="footer-top">
         <div class="container">
            <div class="row justify-content-around">
               <div class="col-lg-3 col-md-6 ps-0 footer-info">
                  <router-link class="logo" to="/"><img src="../assets/logo2.png" alt="" width="320"></router-link>
               </div>
               <div class="col-lg-3 col-md-6 footer-links ms-5">
                  <h4>Sitio</h4>
                  <ul class="mt-3">
                     <li class="mt-1"><i class="bi bi-chevron-right"></i><router-link class="nav-link" to="/"> Inicio</router-link></li>
                     <li><i class="bi bi-chevron-right"></i><router-link class="nav-link" to="/#about"> Sobre Mi</router-link></li>
                     <li><i class="bi bi-chevron-right"></i><router-link class="nav-link" to="/journal"> Obras</router-link></li>
                  </ul>
               </div>
               <div class="col-lg-3 col-md-6 footer-contact">
                  <h4>Contáctame</h4>
                  <p>
                     <strong><i class="bi bi-telephone"></i> </strong> +56 9 7436 7083<br>
                     <strong><i class="bi bi-envelope"></i> </strong> lanierpal@gmail.com

                     <!-- <strong>Email:</strong> info@<br> -->
                     <!-- <a href="https://www.youtube.com/@carolinapalacios9509"><img class="social__icon" src="../assets/youtube.svg" height="30px" alt=""></a> -->
                  </p>
                  <div class="social-links">
                     <a href="https://www.youtube.com/@carolinafagerstrom" target="_blank" class="twitter"><i class="bi bi-youtube"></i></a>
                     </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   <!-- End Footer -->
</template>
<script>
   export default {
   name: 'FooterComp',
   mounted(){
      window.addEventListener("click", ()=> {
         const lang = document.documentElement.lang;
         const titles = document.querySelectorAll("#footer h4");
         const footerLinks = document.querySelectorAll("#footer .nav-link");
         if(lang == "es"){
            titles[0].innerHTML = "Sitio";
            footerLinks[0].innerHTML = "Inicio";
            footerLinks[1].innerHTML = "Sobre Mi";
            footerLinks[2].innerHTML = "Obras";
            titles[1].innerHTML = "contáctame"
         }
         if(lang == "en"){
            titles[0].innerHTML = "WebSite";
            footerLinks[0].innerHTML = "Home";
            footerLinks[1].innerHTML = "About Me";
            footerLinks[2].innerHTML = "My Work";
            titles[1].innerHTML = "contact me"
         }
      });
   }
   }
</script>
<style scoped>
   a {
   text-decoration: none;
   }
   a:hover,
   a:active,
   a:focus {
   color: #D1922E;
   outline: none;
   text-decoration: none;
   }

   #footer {
      color: #eee;
      font-size: 14px;
   }
   #footer .footer-top {
      background: #111;
      padding: 60px 0 30px 0;
   }
   #footer .footer-top .footer-info h3 {
   font-size: 34px;
   margin: 0 0 20px 0;
   }
   #footer .footer-top .social-links a {
      background: #333;
      color: #eee;
      line-height: 1;
      margin-right: 4px;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      transition: 0.3s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all .3s ease-in-out;
   }
   #footer .footer-top .social-links a i {
      font-size: 16px;
   }
   #footer .footer-top .social-links a:hover {
   background: #D1922E;
   color: #fff;
   }
   #footer .footer-top h4 {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 12px;
   }
   #footer .footer-top h4::before,
   #footer .footer-top h4::after {
   content: "";
   position: absolute;
   left: 0;
   bottom: 0;
   height: 2px;
   }
   #footer .footer-top h4::before {
   right: 0;
   background: #555;
   }
   #footer .footer-top h4::after {
   background: #D1922E;
   width: 60px;
   }
   #footer .footer-top .footer-links {
   margin-bottom: 30px;
   }
   #footer .footer-top .footer-links ul {
   list-style: none;
   padding: 0;
   margin: 0;
   }
   #footer .footer-top .footer-links ul i {
   padding-right: 8px;
   color: #ddd;
   }
   #footer .footer-top .footer-links ul li {
   border-bottom: 1px solid #333;
   padding: 10px 0;
   display: flex;
   flex-direction: row;
   }
   #footer .footer-top .footer-links ul li:first-child {
   padding-top: 0;
   }
   #footer .footer-top .footer-links ul a {
   color: #eee;
   }
   #footer .footer-top .footer-links ul a:hover {
   color: #D1922E;
   }
   #footer .footer-top .footer-contact {
   margin-bottom: 30px;
   }
   #footer .footer-top .footer-contact p {
   line-height: 26px;
   }
   .social__icon{
   color: #D1922E;
   }
   .nav-link{
      font-family: var(--font-primary);
      font-weight: 300;
   }
</style>
