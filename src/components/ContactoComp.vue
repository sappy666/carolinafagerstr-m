<template>
   <!-- ======= Contact Section ======= -->
   <div id="contact" class="paddsection">
      <div class="container">
         <div class="">
            <div class="row">
               <div class="col-lg-6">
                  <div class="contact-contact">
                     <h2 class="mb-30">Contacto</h2>
                     <ul class="contact-details">
                        <li><i class="bi bi-geo"></i><span> Con Cón, Chile</span></li>
                        <li><i class="bi bi-telephone"></i><span> +56 9 7436 7083</span></li>
                        <li><i class="bi bi-envelope"></i><span> lanierpal@gmail.com</span></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-6">
                  <form action="correo.php" method="POST" role="form" class="php-email-form">
                     <div class="row gy-3">
                        <div class="col-lg-6">
                           <div class="form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Tu Nombre" required>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Tu Email" required>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <textarea class="form-control" name="message" placeholder="Mensaje" required></textarea>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="loading">Cargando</div>
                           <div class="error-message"></div>
                           <div class="sent-message">Tu mensaje fue enviado, muchas gracias!</div>
                        </div>
                        <div class="mt-0">
                           <input type="submit" class="btn btn-send" value="Enviar mensaje">
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- End Contact Section -->
</template>
<script>
   export default {
   name: 'ContactoComp',
   mounted(){
      window.addEventListener("click", ()=> {
         let lang = document.documentElement.lang;
         const title = document.querySelector("#contact h2");
         const inputs = document.querySelectorAll("input");
         const textArea = document.querySelector("textarea")

         if(title != null){
            if(lang == "es"){
               title.innerHTML = "Contacto";
               inputs[0].placeholder = "Tu Nombre";
               inputs[1].placeholder = "Tu Email";
               inputs[2].placeholder = "Asunto";
               textArea.placeholder = "Mensaje";
               inputs[3].value = "Enviar mensaje"
            }
            if(lang == "en"){
               title.innerHTML = "Contact";
               inputs[0].placeholder = "Name";
               inputs[1].placeholder = "Mail";
               inputs[2].placeholder = "Subject";
               textArea.placeholder = "Message";
               inputs[3].value = "Send";
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
   p {
   padding: 0;
   margin: 0 0 30px 0;
   font-family: 'DM Sans', sans-serif;
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
   text-transform: uppercase;
   }
   h2{
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 2px;
   }
   #contact {
   height: auto;
   width: 100%;
   padding-top: 10rem;
   padding-bottom: 5rem;
   scroll-margin: -40px;
   }
   .contact-details {
   list-style: none;
   margin: 0;
   padding: 0;
   font-family: 'DM Sans', sans-serif;
   color: #a1a1a1;

   }
   .contact-details li {
   padding-bottom: 10px;
   }
   #contact input,
   #contact textarea {
      font-family: 'DM Sans', sans-serif;
   width: 100%;
   margin-bottom: 5px;
   }
   #contact textarea {
   min-height: 160px;
   }
   .php-email-form .error-message {
   display: none;
   color: #fff;
   background: #ed3c0d;
   text-align: left;
   padding: 15px;
   margin-bottom: 15px;
   font-weight: 600;
   }
   .php-email-form .error-message br+br {
   margin-top: 25px;
   }
   .php-email-form .sent-message {
   display: none;
   color: #fff;
   background: #D1922E;
   text-align: center;
   padding: 15px;
   font-weight: 600;
   margin-bottom: 15px;
   }
   .php-email-form .loading {
   display: none;
   background: #fff;
   text-align: center;
   padding: 15px;
   margin-bottom: 15px;
   }
   .php-email-form .loading:before {
   content: "";
   display: inline-block;
   border-radius: 50%;
   width: 24px;
   height: 24px;
   margin: 0 10px -6px 0;
   border: 3px solid #18d26e;
   border-top-color: #eee;
   animation: animate-loading 1s linear infinite;
   }
   @keyframes animate-loading {
   0% {
   transform: rotate(0deg);
   }
   100% {
   transform: rotate(360deg);
   }
   }
   .btn.btn.btn-send{
      background-color: #d1922e;
      color:#f7f7f7;
      font-weight: 600;
      border-radius: .375em;
      transition: all ease .8s;
   }
   .btn.btn.btn-send:hover{
      color: #d1922e;
      background-color: #f7f7f7;
      border: 1px solid #d1922e;
   }
</style>
