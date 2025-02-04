<template>
   <div id="about" class="container">
       <div class="row justify-content-center justify-content-lg-between">
           <div class="col-10 col-lg-4">
               <div class="div-img-bg">
                   <div class="about-img">
                       <img src="../assets/caro2.jpeg" class="img-responsive" alt="me">
                   </div>
               </div>
           </div>
           <div class="col-10 col-lg-7 mt-5 mt-lg-0 text-center text-lg-start">
               <div class="about-descr">
                   <p class="p-heading">Carolina Fagerström Conocida también como Carolina Palacios Pianista y compositora de Viña del Mar.</p>
                   <p class="separator">Comienza sus estudios de piano clásico en el año 2002 en el Conservatorio de PUCV con la profesora María Angélica Belaustegui, dando término a estos, en el año 2011. Dedicándose a la docencia por más de una década, en el año 2016 comienza estudios de composición musical con los profesores Rafael Díaz y Pedro Aguilera. Algunas de sus obras han sido estrenadas por la Orquesta MargaMarga, dirigidas por el Maestro Luis José Recart, también por la Orquesta de cámara de PUCV, dirigidas por el Maestro Pablo Alvarado y también ha compuesto obras escritas para coro femenino estrenadas por Coral femenina de Viña del Mar y dirigidas por la Maestra Jessica Quezada en el II festival Leni Alexandar Valparaíso.
                       Ha tomado cursos de Composición Musical para medios audiovisuales con el profesor Jorge Aliaga en 2021.
                       Ganadora del primer lugar en el IX concurso de composición Fundación Orquesta Margamarga, con la Obra Mintaka, para contrabajo en el año 2022.
                   </p>
                   <!-- <br><div class="mas__noticias"><a href=""><p>Leer más</p></a></div> -->
               </div>
           </div>
       </div>
   </div>
</template>
<script>
   export default {
      name: "SobremiComp",
      mounted(){
         window.addEventListener("click", () => {
            const lang = document.documentElement.lang; 
            const aboutTitle = document.querySelector(".p-heading");
            const aboutText = document.querySelector(".separator");
            if(aboutTitle != null && aboutText != null){
   
           
               if( lang == 'es'){
                  aboutTitle.innerText = "Carolina Fagerström Conocida también como Carolina Palacios Pianista y compositora de Viña del Mar.";
                  aboutText.innerText = "Comienza sus estudios de piano clásico en el año 2002 en el Conservatorio de PUCV con la profesora María Angélica Belaustegui, dando término a estos, en el año 2011. Dedicándose a la docencia por más de una década, en el año 2016 comienza estudios de composición musical con los profesores Rafael Díaz y Pedro Aguilera. Algunas de sus obras han sido estrenadas por la Orquesta MargaMarga, dirigidas por el Maestro Luis José Recart, también por la Orquesta de cámara de PUCV, dirigidas por el Maestro Pablo Alvarado y también ha compuesto obras escritas para coro femenino estrenadas por Coral femenina de Viña del Mar y dirigidas por la Maestra Jessica Quezada en el II festival Leni Alexandar Valparaíso. Ha tomado cursos de Composición Musical para medios audiovisuales con el profesor Jorge Aliaga en 2021. Ganadora del primer lugar en el IX concurso de composición Fundación Orquesta Margamarga, con la Obra Mintaka, para contrabajo en el año 2022.";
               }
               else if(lang == 'en'){
                  aboutTitle.innerText = "Carolina Fagerstrom Also Know as Carolina Palacios is a pianist and composer from Viña del Mar, Chile";
                  aboutText.innerText = "She began her classical piano studies in 2002 at the PUCV Conservatory with professor María Angélica Belaustegui, finishing them in 2011. After dedicating herself to teaching for over a decade, she began studying musical composition in 2016 with professors Rafael Díaz and Pedro Aguilera. Some of her works has been debuted by the MargaMarga Orchestra, conducted by Maestro Luis José Recart since 2016 as well as by the PUCV Chamber Orchestra, conducted by Maestro Pablo Alvarado. She has also composed pieces written for women's choir, premiered by Coral Femenina de Viña del Mar and conducted by Maestra Jessica Quezada at the II Leni Alexandar Valparaíso Festival in 2019, She has taken courses in Musical Composition for Audiovisual Media with Professor Jorge Aliaga in 2021. Carolina was the winner of first place in the IX Composition Contest of the Margamarga Orchestra Foundation, with her work Mintaka for double bass in November 2022.";
               }
            }
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
   #about {
   padding: 100px 0;
   scroll-margin: 40px;
   }
   #about .div-img-bg {
   padding-bottom: 30px;
   border: 20px solid #b8a07e;
   }
   #about .div-img-bg .about-img img {
   width: 100%;
   box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.2);
   margin-top: -60px;
   margin-left: 40px;
   height: 400px;
   -o-object-fit: cover;
   object-fit: cover;
   }
   #about .about-descr .p-heading {
   font-family: var(--font-terciary);
   font-size: 28px;
   margin-bottom: 30px;
   }
   #about .about-descr .separator {
   margin-bottom: 0;
   }
</style>
