<template>
   <div id="about" class="container">
      <div class="row justify-content-center justify-content-lg-between">
         <div class="col-10 col-lg-4">
            <div class="div-img-bg">
               <div class="about-img">
                  <img src="../assets/piano.jpg" class="img-responsive" alt="me">
               </div>
            </div>
         </div>
         <div class="col-10 col-lg-7 mt-5 mt-lg-0 text-center text-lg-start">
            <div class="about-descr">
               <p class="p-heading">Pianista y compositora Viñamarina, estudió en el Instituto de Música de la Pontificia Universidad Católica de Valparaíso la cátedra de piano clásico</p>
               <p class="separator">Especializada en Música Docta, ha interpretado en diferentes escenarios de la V Región, con un variado repertorio de obras para piano, interpretando a Wolfgang Amadeus Mozart en su 250 aniversario de muerte y Franz Schubert en el Teatro Municipal de Valparaíso. También ha destacado su participación como miembro del jurado en el Concurso Claudio Arrau, durante el año 2017. Se ha dedicado por más de una década a la docencia, destacando a sus alumnos en conciertos anuales. Ha compuesto obras para orquesta de cuerdas y coro, siento interpretada por la Orquesta Marga Marga durante el año 2016.</p>
               <!-- <br><div class="mas__noticias"><a href=""><p>Leer más</p></a></div> -->
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
      name: "SobremiComp",
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
