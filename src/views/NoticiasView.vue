<template>
       <!-- ======= Journal Section ======= -->
   <div id="journal" class="mt-5">
      <div class="container">
         <div class="text-center">
            <h2 v-if="this.language == 'es'">Noticias</h2>
            <h2 v-if="this.language == 'en'">News</h2>
         </div>
      </div>
      <div class="container">
         <div class="row justify-content-center justify-content-lg-start">
            <div class="col col-11 col-lg-4 col-md-6 p-1" v-for="entrada in entradas" :key="entrada.id">
               <div class="journal-info">
                  <a :href="entrada.link"><img :src="entrada.img" class="img-responsive" alt="img"></a>
               </div>
               <div class="journal-txt">
                  <h3 v-if="this.language == 'es'"><a :href="entrada.link">{{ entrada.title }}</a></h3>
                  <h3 v-if="this.language == 'en'"><a :href="entrada.link">{{ entrada.titleEn }}</a></h3>
                  <p class="separator">{{entrada.text}}</p>  
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import {Entradas} from '@/services/EntradasBlog'

export default {
  name: "NoticiasView",
  data(){
   return {
      entradas: [],
      cargando: false,
      language: ""
   } 
  },
  async created(){
   window.scrollTo({ top: 0, behavior: 'instant' });
   this.language = document.documentElement.lang;
      try {
         this.cargando = true;
         this.entradas = Entradas.getEntradas();
         this.cargando = false;
      } catch (error) {
         console.error(error);
      }
  },
  mounted(){
      window.addEventListener("click", ()=>{
         this.language = document.documentElement.lang;
      });
  }
};
</script>
<style scoped>
a:active,
a:focus {
   outline: none;
   text-decoration: none;
}
#journal {
   background: #f7f7f7;
   padding-top: 5rem;
   padding-bottom: 60px;
}
#journal h2 {
   font-weight: 600;
   margin-bottom:3rem;
   padding: 0;
   text-transform: uppercase;
   letter-spacing: 2px;
   font-size: 25px;
}
#journal .journal-info{
   margin-bottom: 5px;
}
#journal .journal-info img {
   width: 100%;
   height: 20rem;
   object-fit: cover;
}
   #journal .journal-txt h3{
   font-weight: 600;
   font-size: 1.2rem;
   margin-bottom: 2rem;
}
#journal .journal-txt h3 a{
   color: #d1922e;
   transition: all 0.3s ease-in-out 0s;
   transition: 0.5s;
   text-decoration: none;
}
#journal .journal-txt h3 a:hover {
   color: #b8a07e;
}
#journal .journal-info .journal-txt p {
   margin: 0;
   font-size: 14px;
}
</style>
