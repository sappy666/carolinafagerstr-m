<template>
  <NavBar/>
  <router-view />
  <TopArrow />
  <FooterComp/>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet"> 
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,500,500i,600,600i,700,700i,900,900i" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
</template>

<script>
import NavBar from "@/components/NavBar.vue" 
import FooterComp from "@/components/FooterComp.vue"
import TopArrow from "@/components/TopArrow.vue"



export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    TopArrow
  },
  created(){
    document.documentElement.setAttribute("lang", "es");
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      this.$router.push(this.$router.currentRoute.value.path);
    });
  }
}
</script>

<style>
:root{
  --font-primary:"Poppins", helvetica;
  --font-secondary:'Montserrat', sans-serif;
  --font-terciary: "Playfair Display", serif;
}
body {
  background: #fff;
  color: #333;
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: var(--font-secondary);
}

h2 {
  color: #292929;
  font-weight: 600;
}

h4 {
  color: #292929;
  font-size: 14px;
  font-weight: 600;
}

a {
  color: #D1922E;
  text-decoration: none !important;
  cursor: pointer;
}

a:hover {
  color: #D1922E;
}

p {
  margin: 25px 0;
  padding: 0;
  font-size: 15px;
  color: #555555;
  line-height: 28px;
}

::-moz-selection {
  background: #b8a07e;
  color: #fff;
}

::selection {
  background: #b8a07e;
  color: #fff;
}

.btn {
  background: #333;
  border: medium none;
  border-radius: 0;
  color: #fff;
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  text-transform: uppercase;
}

.btn:hover,
.btn:focus {
  color: #fff;
}

.padDiv {
  padding: 30px 20px;
}

.section-title {
  margin-bottom: 70px;
}

.section-title h2 {
  font-size: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.form-control {
  background-color: transparent;
  border: 1px solid #999;
  border-radius: 0;
  color: #999999;
  font-size: 12px;
  font-weight: 500;
  height: 50px;
  letter-spacing: 0.1em;
  padding-left: 10px;
  margin: 0 0 25px 0;
  line-height: 14px;
  text-transform: uppercase;
}

.form-control:focus {
  box-shadow: none;
  outline: 0 none;
}

.paddsection {
  padding-top: 90px;
  padding-bottom: 90px;
}

.paddsections {
  padding-top: 90px;
  padding-bottom: 90px !important;
}

.hvr-shutter-in-horizontal::before {
  background: #333;
}

.hvr-shutter-in-horizontal:hover {
  background: #b8a07e;
}

.mb-30 {
  margin-bottom: 30px;
}

.main-content {
  padding-top: 140px;
}
</style>
