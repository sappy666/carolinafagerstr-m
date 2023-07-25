<template>
   <section id="hero">
      <div class="info">
         <h2>Carolina Fagerström</h2>
         <p>Pianista y compositora apasionada por la música clásica y contemporánea</p>
      </div>
   </section>
   <SobremiComp/>
   <JournalComp/>
   <ContactoComp/>
</template>
<script>
import SobremiComp from "@/components/SobremiComp.vue"
import JournalComp from "@/components/JournalComp.vue"
import ContactoComp from "@/components/ContactoComp.vue"

export default {
   name: "HomeView",
   components: {
      SobremiComp,
      JournalComp,
      ContactoComp,
   },
   updated(){
      var section = this.$router.currentRoute.value.hash.replace("#", "");
      if (section)
         this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
   },
   mounted(){
      var section = this.$router.currentRoute.value.hash.replace("#", "");
      if (section)
         this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());

         window.addEventListener("click", () => {
            const lang = document.documentElement.lang; 
            const heroText = document.querySelector("#hero p");
            if (heroText != null){
               if( lang == 'es'){
                  heroText.innerText = "Pianista y compositora apasionada por la música clásica y contemporánea";
               }
               else if(lang == 'en'){
                  heroText.innerText = "A pianist and composer passionate about classical and contemporary music.";
               }
            }
         });
   }
}
</script>
<style scoped>
   #hero {
      height: 150vh;
      background-image: url("../assets/fondo3.jpg");
      background-size: cover;
      font-family: "Poppins", helvetica;
      overflow-x: hidden;
      position: relative;
   }
   #hero .info{
      text-align: center;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      position: absolute;
   }
   #hero h2 {
      color: #d7d7d7;
      margin-bottom: 30px;
      font-weight: 700;
   }
   #hero p {
      color: #d7d7d7;
   }
   @media (min-height: 500px) {
      #hero {
         height: 95vh;
      }
      #hero h2{
         font-size: 48px; 
      }
   }
</style>
