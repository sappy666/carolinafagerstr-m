<template>
   <header id="header" class="fixed-top d-flex align-items-center header-transparent">
      <div class="container-fluid">
         <div class="row justify-content-center align-items-center">
            <div class="col-xl-11 d-flex align-items-center justify-content-between">
               <!-- <h2 class="logo"><a href="../views/HomeView.vue">Carolina fagerström</a></h2> -->
               <router-link to="/" class="logo"><img src="../assets/logo2.png" alt="" class="img-fluid"></router-link>
               <nav id="navbar" class="navbar">
                  <ul>
                     <li><router-link class="nav-link active" to="/">Inicio</router-link></li>
                     <li><router-link class="nav-link" to="/#about">Sobre mí</router-link></li>
                     <li><router-link class="nav-link" to="/noticias">Noticias</router-link></li>
                     <li class="dropdown">
                        <router-link class="nav-link" to="/journal#todos">Obras<i class="bi bi-chevron-down"></i></router-link>
                        <ul>
                           <li>
                              <router-link class="nav-link" to="/journal#conciertos">Conciertos</router-link>
                           </li>
                           <li>
                              <router-link class="nav-link" to="/journal#videos">Multimedia</router-link>
                           </li>
                        </ul>
                     </li>
                     <li><router-link class="nav-link" to="/#contact">Contacto</router-link></li>
                  </ul>
                  
                  <i class="bi bi-list mobile-nav-toggle"></i>
                  <div id="btn-language" class="nav-link ms-1 ms-md-3">EN</div>
               </nav>
            </div>
         </div>
      </div>
   </header>
   <!-- End Header -->
</template>
<script>
   export default {
      name: 'NavBar',

      mounted() {
         const btnLanguage = document.getElementById("btn-language");
         const navlinks = document.querySelectorAll(".nav-link");
         btnLanguage.addEventListener("click", () => {
            this.lang = document.documentElement.lang; 
            if( this.lang == 'es'){
               btnLanguage.innerText = "es";
               navlinks[0].innerText = "Home";
               navlinks[1].innerText = "About me";
               navlinks[2].innerText = "News";
               navlinks[3].innerText = "My Work";
               navlinks[4].innerText = "Concerts";
               navlinks[5].innerText = "Multimedia";
               navlinks[6].innerText = "Contact";
               document.documentElement.setAttribute("lang", "en");
            }
            else if(this.lang == 'en'){
               btnLanguage.innerText = "en";
               navlinks[0].innerText = "Inicio";
               navlinks[1].innerText = "Sobre mi";
               navlinks[2].innerText = "Noticias";
               navlinks[3].innerText = "Obras";
               navlinks[4].innerText = "Conciertos";
               navlinks[5].innerText = "Multimedia";
               navlinks[6].innerText = "Contacto";
               document.documentElement.setAttribute("lang", "es");
            }
         });
         navlinks[0].addEventListener("click",()=>{
            Array.from(navlinks).forEach(l =>{
               l.classList.remove("active");
            });
            navlinks[0].classList.add("active");
         });
         navlinks[2].addEventListener("click",()=>{
            Array.from(navlinks).forEach(l =>{
               l.classList.remove("active");
            });
            navlinks[2].classList.add("active");
         });
         navlinks[3].addEventListener("click",()=>{
            Array.from(navlinks).forEach(l =>{
               l.classList.remove("active");
            });
            navlinks[3].classList.add("active");
         });
      }
   }
</script>

<style scoped>
   a {
   color: #D1922E;
   transition: 0.5s;
   text-decoration: none;
   }
   a:hover,
   a:active,
   a:focus {
   color: #D1922E;
   outline: none;
   text-decoration: none;
   }
   p {
   padding: 0;
   margin: 0 0 30px 0;
   }
   router-link{
   font-family: "Poppins", helvetica;
   cursor: pointer;
   }
   .logo img{
   height: 80px;
   padding-bottom: 10px;
   }
   #header{
      background-color: #111111;
   }
   .navbar {
   padding: 0;
     max-width: 100dvw;
   }
   .navbar ul {
   margin: 0;
   padding: 0;
   display: flex;
   list-style: none;
   align-items: center;
   }
   .navbar li {
   position: relative;
   }
   .navbar a,
   .navbar a:focus, router-link:focus {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 0 10px 30px;
   font-family: 'DM Sans', sans-serif;
   font-size: 13px;
   font-weight: 600;
   color: #fff;
   white-space: nowrap;
   text-transform: uppercase;
   transition: 0.3s;
   }
   .navbar a i,
   .navbar a:focus i , router-link:focus i{
   font-size: 12px;
   line-height: 0;
   margin-left: 5px;
   }
   .navbar a:hover,
   .navbar .active,
   .navbar .active:focus,
   .navbar li:hover>a , li:hover>router-link{
   color: #D1922E;
   }
   .navbar .dropdown ul , router-link .dropdown ul{
   display: block;
   position: absolute;
   left: 14px;
   top: calc(100% + 30px);
   margin: 0;
   padding: 10px 0;
   z-index: 99;
   opacity: 0;
   visibility: hidden;
   background: #fff;
   box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
   transition: 0.3s;
   }
   .navbar .dropdown ul li , router-link ul li{
   min-width: 200px;
   }
   .navbar .dropdown ul a {
   padding: 10px 20px;
   text-transform: none;
   color: #666666;
   }
   .navbar .dropdown ul a i {
   font-size: 12px;
   }
   .navbar .dropdown ul a:hover,
   .navbar .dropdown ul .active:hover,
   .navbar .dropdown ul li:hover>a {
   color: #D1922E;
   }
   .navbar .dropdown:hover>ul {
   opacity: 1;
   top: 100%;
   visibility: visible;
   }
   .navbar .dropdown .dropdown ul {
   top: 0;
   left: calc(100% - 30px);
   visibility: hidden;
   }
   .navbar .dropdown .dropdown:hover>ul {
   opacity: 1;
   top: 0;
   left: 100%;
   visibility: visible;
   }
   @media (max-width: 1366px) {
   .navbar .dropdown .dropdown ul {
   left: -90%;
   }
   .navbar .dropdown .dropdown:hover>ul {
   left: -100%;
   }
   }
   /**
   * Mobile Navigation 
   */
   .mobile-nav-toggle {
   color: #fff;
   font-size: 28px;
   cursor: pointer;
   display: none;
   line-height: 0;
   transition: 0.5s;
   }
   @media (max-width: 991px) {
   .mobile-nav-toggle {
   display: block;
   }
   .navbar ul {
   display: none;
   }
   }
   .navbar-mobile {
   position: fixed;
   overflow: hidden;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background: rgba(26, 26, 26, 0.9);
   transition: 0.3s;
   z-index: 999;
   }
   .navbar-mobile .mobile-nav-toggle {
   position: absolute;
   top: 15px;
   right: 15px;
   }
   .navbar-mobile ul {
   display: block;
   position: absolute;
   top: 55px;
   right: 15px;
   bottom: 15px;
   left: 15px;
   padding: 10px 0;
   background-color: #fff;
   overflow-y: auto;
   transition: 0.3s;
   }
   .navbar-mobile a,
   .navbar-mobile a:focus {
   padding: 10px 20px;
   font-size: 15px;
   color: #333333;
   }
   .navbar-mobile a:hover,
   .navbar-mobile .active,
   .navbar-mobile li:hover>a {
   color: #D1922E;
   }
   .navbar-mobile .getstarted,
   .navbar-mobile .getstarted:focus {
   margin: 15px;
   }
   .navbar-mobile .dropdown ul {
   position: static;
   display: none;
   margin: 10px 20px;
   padding: 10px 0;
   z-index: 99;
   opacity: 1;
   visibility: visible;
   background: #fff;
   box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
   }
   .navbar-mobile .dropdown ul li {
   min-width: 200px;
   }
   .navbar-mobile .dropdown ul a {
   padding: 10px 20px;
   }
   .navbar-mobile .dropdown ul a i {
   font-size: 12px;
   }
   .navbar-mobile .dropdown ul a:hover,
   .navbar-mobile .dropdown ul .active:hover,
   .navbar-mobile .dropdown ul li:hover>a {
   color: #D1922E;
   }
   .navbar-mobile .dropdown>.dropdown-active {
   display: block;
   }
   #btn-language{
      color: #fff;
      text-transform: uppercase;
      font-size: .9rem;
      font-weight: 600;
      cursor: pointer;
   }
</style>
