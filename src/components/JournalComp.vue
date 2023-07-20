<template>
   <div id="journal" class="text-left paddsection pt-5">
      <div class="container">
         <div class="section-title text-center">
            <h2>Noticias</h2>
         </div>
      </div>
      <div class="container">
         <div class="journal-block">
            <div class="row">
               <div class="col-12 col-md-6 col-lg-4" v-for="entrada in entradas" :key="entrada.id">
                  <div class="journal-info">
                     <a :href="entrada.link"><img :src="entrada.img" class="img-responsive" alt="img"></a>
                  </div>
                  <div class="journal-txt">
                     <h3><a :href="entrada.link">{{ entrada.title }}</a></h3>
                     <p class="separator">{{entrada.text}}</p>  
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="btn-mas-noticias"><router-link to="/noticias">Ver más</router-link></div>
   </div>
</template>
<script>
import {Entradas} from '@/services/EntradasBlog'

export default {
  name: "JournalComp",
  props:{
      posts: Number
  },
  data(){
   return {
      entradas: [],
      cargando : false
   } 
  },
  async created(){
      try {
         this.cargando = true;
         this.entradas = Entradas.getEntradasCant(3);
         this.cargando = false;
      } catch (error) {
         console.error(error);
      }
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style scoped>
a,
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
.btn-mas-noticias{
   text-align: center;
}
.btn-mas-noticias a{
   background-color: #d1922e;
   color:#f7f7f7;
   font-weight: 600;
   padding: 10px 20px;
   border-radius: .375em;
   transition: all ease .8s;
}
.btn-mas-noticias a:hover{
   color: #d1922e;
   background-color: #f7f7f7;
   border: 1px solid #d1922e;

}
</style>
