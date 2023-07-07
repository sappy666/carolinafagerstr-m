<template>
   <section id="hero" class="hero">
      <div class="info d-flex align-items-center">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-8 text-center">
                  <h2 data-aos="fade-down">Carolina fagerström</h2>
                  <p data-aos="fade-up">Pianista y compositora apasionada por la música clásica y contemporánea</p>
                  <!-- <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Conócenos</a> -->
               </div>
            </div>
         </div>
      </div>
   </section>
   <div class="py-5"></div>
   <!-- End Hero Section -->
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
   }
</script>
<style scoped>
   #hero {
   width: 100%;
   height: 100vh;
   /* background: #404040; */
   /* overflow: hidden; */
   position: relative;
   overflow-x: hidden;
   padding: 0;
   background-image: url("../assets/fondo3.jpg");
   background-size: cover;
   font-family: "Poppins", helvetica;
   }
   @media (max-height: 500px) {
   #hero {
   height: 150vh;
   }
   }
   #hero {
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   }
   #hero .container {
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: 0;
   top: 70px;
   left: 100px;
   right: 100px;
   }
   #hero .container {
   text-align: center;
   }
   #hero h2 {
   color: #fff;
   margin-bottom: 30px;
   font-size: 48px;
   font-weight: 700;
   }
   #hero p {
   /* width: 100%; */
   /* margin: 0 auto 30px auto; */
   color: #d7d7d7;
   font-family: "Poppins", helvetica;
   }
</style>
