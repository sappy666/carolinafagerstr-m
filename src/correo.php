<?php
$name = $_POST["name"];
$msg = "Soy ".$name.":\n".$_POST["message"];
$remitente = $_POST["email"];
$destino = "hgbeckerss@gmail.com";
$asunto = $_POST["subject"];

$header = "From: " . $remitente ."\r\n";
$header .= "Reply-To:". $remitente . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion();

$mail = @mail($destino, $asunto, $msg, $header);

if($mail){
  echo '<h1>MENSAJE ENVIADO CON EXITO</h1>'
  echo $remitente;
  echo $destino;
  echo $asunto;
  echo $msg;
  // header("Location: https://www.carolinapalacios.cl/");
}
else{
  // header("Location: https://www.carolinapalacios.cl/");
}
?>