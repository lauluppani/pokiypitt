<!-- Form taken from http://trevordavis.net/blog/ajax-forms-with-jquery -->

<?php

$emailTo = "pokiypitt+rsvp@gmail.com";
$subject = "Pokiypitt.com.ar Formulario RSVP";
$emailFrom = $_POST['email'];
$mensaje = <<<MAIL
¿Vas a venir?: {$_POST['rsvp']}

Nombre: {$_POST['nombre']}

Apellido: {$_POST['apellido']}

Email: {$_POST['email']}

Comida especial: {$_POST['comida']}

MAIL;

mail($emailTo, $subject, $mensaje, "From: ".$emailFrom);
?>