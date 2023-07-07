<template>
   <!-- ======= Portfolio Section ======= -->
   <div id="portfolio" class="paddsection mt-5">
      <div class="container">
         <div class="section-title text-center">
            <h2>Obras</h2>
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
               <ul id="portfolio-flters">
                  <li class="filtro filter-active" data-filter="filtro--todos">Todos</li>
                  <li class="filtro" data-filter="filtro--conciertos">Conciertos</li>
                  <li class="filtro" data-filter="filtro--videos">Multimedia</li>
               </ul>
            </div>
         </div>
         <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item" v-for="obra in obras" :key="obra.id" :data-type = "obra.type">
               <iframe width="400" height="315" :src="obra.link" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
         </div>
      </div>
   </div>
   <!-- End Portfolio Section -->
</template>
<script>
import {Obras} from '@/services/Obras'

export default {
  data() {
    return {
      obras: [],
      cargando: false,
    };
  },
   async created(){
      try{
         this.cargando = true;
         this.obras = Obras.getObras();
         this.cargando = false;
      }
      catch(e){
         console.log("Error al cargar obras...");
      }
   }, 
   mounted() {
      const filtros = document.getElementsByClassName("filtro"); // Botones de filtros
      Array.from(filtros).forEach(element => {  // Recorre botones para agregar evento click
         element.addEventListener("click", (e)=>{ 
            let seleccionado = e.target.attributes["data-filter"].value; // Filtro seleccionado
            const tarjetas = document.getElementsByClassName("portfolio-item") // Tarjetas cargadas (Todas)
            // Quitar marca de filtro activo
            Array.from(filtros).forEach( btn =>{
                  btn.classList.remove("filter-active");
            });
            // SELECCION DE CONCIERTOS
            if (seleccionado == "filtro--conciertos"){
               // Marcar boton activo
               document.querySelector('[data-filter="filtro--conciertos"]').classList.add("filter-active");
               // Recorre las tarjetas, para modificar clases
               Array.from(tarjetas).forEach(tarjeta =>{ 
                  if(tarjeta.attributes["data-type"].value != "concierto"){
                     tarjeta.classList.add("noVisible");
                  }
                  else{
                     tarjeta.classList.remove("noVisible");
                  }
               });
            }
            // SELECCION DE VIDEOS
            else if (seleccionado == "filtro--videos"){
               // Marcar boton activo
               document.querySelector('[data-filter="filtro--videos"]').classList.add("filter-active");
               // Recorre las tarjetas, para modificar clases
               Array.from(tarjetas).forEach(tarjeta =>{ // Recorre las tarjetas, para modificar clases
                  if(tarjeta.attributes["data-type"].value != "video"){
                     tarjeta.classList.add("noVisible");
                  }
                  else{
                     tarjeta.classList.remove("noVisible");
                  }
               });
            }
            // SELECCION DE TODOS
            else if(seleccionado == "filtro--todos"){ // Recorre las tarjetas, para modificar clases
               // Marcar boton activo
               document.querySelector('[data-filter="filtro--todos"]').classList.add("filter-active");
               // Recorre las tarjetas, para modificar clases
               Array.from(tarjetas).forEach(tarjeta =>{
                  tarjeta.classList.remove("noVisible");
               });
            }
            else{
               console.log("Opcion no valida")
            }
         });
      });
   },
  methods: {
   
    },
};
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
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   font-family: 'DM Serif Display', serif;
   font-weight: 600;
   margin: 0 0 20px 0;
   padding: 0;
   }
   #portfolio {
   padding: 60px 0;
   background-color: #CCC6BE;
   }
   #portfolio #portfolio-flters {
   padding: 0;
   margin: 5px 0 35px 0;
   list-style: none;
   text-align: center;
   }
   #portfolio #portfolio-flters li {
   cursor: pointer;
   margin: 15px 15px 15px 0;
   display: inline-block;
   padding: 10px 20px;
   font-size: 12px;
   line-height: 20px;
   color: #666666;
   border-radius: 4px;
   text-transform: uppercase;
   background: #fff;
   margin-bottom: 5px;
   transition: all 0.3s ease-in-out;
   }
   #portfolio #portfolio-flters li:hover,
   #portfolio #portfolio-flters li.filter-active {
   background: #D1922E;
   color: #fff;
   }
   #portfolio #portfolio-flters li:last-child {
   margin-right: 0;
   }
   #portfolio .portfolio-wrap {
   box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
   transition: 0.3s;
   }
   #portfolio .portfolio-wrap:hover {
   box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);
   }
   #portfolio .portfolio-item {
   position: relative;
   height: 360px;
   overflow: hidden;
   }
   #portfolio .portfolio-item.noVisible{
      display: none;
   }
   #portfolio .portfolio-item figure {
   background: #000;
   overflow: hidden;
   height: 240px;
   position: relative;
   border-radius: 4px 4px 0 0;
   margin: 0;
   }
   #portfolio .portfolio-item figure:hover img {
   opacity: 0.4;
   transition: 0.3s;
   }
   #portfolio .portfolio-item figure .link-preview,
   #portfolio .portfolio-item figure .link-details {
   position: absolute;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   opacity: 0;
   line-height: 1;
   text-align: center;
   width: 36px;
   height: 36px;
   background: #fff;
   border-radius: 50%;
   transition: 0.2s linear;
   }
   #portfolio .portfolio-item figure .link-preview i,
   #portfolio .portfolio-item figure .link-details i {
   font-size: 22px;
   color: #333;
   line-height: 0;
   }
   #portfolio .portfolio-item figure .link-preview:hover,
   #portfolio .portfolio-item figure .link-details:hover {
   background: #D1922E;
   }
   #portfolio .portfolio-item figure .link-preview:hover i,
   #portfolio .portfolio-item figure .link-details:hover i {
   color: #fff;
   }
   #portfolio .portfolio-item figure .link-preview {
   left: calc(50% - 38px);
   top: calc(50% - 18px);
   }
   #portfolio .portfolio-item figure .link-details {
   right: calc(50% - 38px);
   top: calc(50% - 18px);
   }
   #portfolio .portfolio-item figure:hover .link-preview {
   opacity: 1;
   left: calc(50% - 44px);
   }
   #portfolio .portfolio-item figure:hover .link-details {
   opacity: 1;
   right: calc(50% - 44px);
   }
   #portfolio .portfolio-item .portfolio-info {
   background: #fff;
   text-align: center;
   padding: 30px;
   height: 90px;
   border-radius: 0 0 3px 3px;
   }
   #portfolio .portfolio-item .portfolio-info h4 {
   font-size: 18px;
   line-height: 1px;
   font-weight: 700;
   margin-bottom: 18px;
   padding-bottom: 0;
   }
   #portfolio .portfolio-item .portfolio-info h4 a {
   color: #333;
   }
   #portfolio .portfolio-item .portfolio-info h4 a:hover {
   color: #D1922E;
   }
   #portfolio .portfolio-item .portfolio-info p {
   padding: 0;
   margin: 0;
   color: #b8b8b8;
   font-weight: 500;
   font-size: 14px;
   text-transform: uppercase;
   }
</style>
