<template>
   <GaleriaComp/>
</template>
<script>
   import GaleriaComp from "@/components/GaleriaComp.vue"
   export default {
       name: "JournalView",
       components: {
      GaleriaComp
      },
      created(){
         window.scrollTo({ top: 0, behavior: 'instant' });
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
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   font-weight: 600;
   margin: 0 0 20px 0;
   padding: 0;
   
   }
   #journal-blog {
   padding-top: 140px;
   }
   /* main content */
   #journal {
      background-color: #CCC6BE;

   padding-top: 5rem;
   }
   #journal .journal-block .journal-info {
   margin-bottom: 30px;
   }
   h2{
   font-weight: 600;
   margin-bottom:3rem;
   padding: 0;
   text-transform: uppercase;
   letter-spacing: 2px;
   font-size: 25px;
   }
   #journal,
   #journal-blog {
   height: auto;
   width: 100%;
   background: #f7f7f7;
   padding-bottom: 60px;
   position: relative;
   }
   #journal-blog {
   background: #fff;
   padding-bottom: 30px;
   }
   #journal .journal-block {
   display: inline-block;
   height: auto;
   width: 100%;
   }
   #journal .journal-block .journal-info {
   position: relative;
   }
   .journal-block .journal-info img {
   max-width: 100%;
   }
   .journal-block .journal-info .journal-txt {
   padding: 25px 0px;
   position: relative;
   }
   .journal-block .journal-info .journal-txt h4 a {
   display: block;
   font-size: 19px;
   line-height: 24px;
   margin: 0 0 13px 0;
   font-weight: 500;
   color: #292929;
   transition: all 0.5s ease-in-out 0s;
   }
   .journal-block .journal-info .journal-txt h4 a:hover {
   color: #b8a07e;
   transition: all 0.5s ease-in-out 0s;
   }
   .journal-block .journal-info .journal-txt p {
   margin: 0;
   font-size: 14px;
   line-height: 24px;
   }
   .mas__noticias{
      margin-left: 10rem;
   }
</style>
