$(document).ready(function(){

  $('#rsvp-form').submit(function( event ) {
    event.preventDefault();
    $("span.error-message").remove();
    $(".error").removeClass('error'); 
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var rsvp = $("input[name='rsvp']:checked").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var comida = $("#comida").val();
    var security = $("#security").val();
    
    
    // VALIDATIONS
    
    if(nombre == '') {
      $("#nombre").parent().append('<span class="error-message">Por favor, ingresa tu nombre.</span>');
      $("#nombre").parent().addClass('error');
      hasError = true;
    }

    if(apellido == '') {
      $("#apellido").parent().append('<span class="error-message">Por favor, ingresa tu apellido.</span>');
      $("#apellido").parent().addClass('error');
      hasError = true;
    }

    if(email == '') {
      $("#email").parent().append('<span class="error-message">Por favor, ingresa tu email.</span>');
      $("#email").parent().addClass('error');
      hasError = true;
    } else if(!emailReg.test(email)) {
      $("#email").parent().append('<span class="error-message">Direccion de correo invalida.</span>');
      $("#email").parent().addClass('error');
      hasError = true;
    }   

    if(security != '') {
      hasError = true;
    }
    

    
    if(hasError == false) {
      $('form input, form button').attr("disabled", "disabled");
       $("form .action button").html('Enviando...').addClass('sending');
      $.post("/sendemail/rsvp.php",
        { 
          rsvp: rsvp,
          nombre: nombre,
          apellido: apellido,
          email: email,
          comida: comida
        },
          function(data){            
            $("form .action button").html('Enviado ✓').removeClass('sending');
            $('.action').prepend("<p class='success'>Muchas gracias por confirmar tu asistencia!</strong></p>");
          }
       );
    }
  });




});