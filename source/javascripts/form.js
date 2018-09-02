var message = "";

$("#sendMessage").on("click", function() {
    message = $("#rsvp-form").serialize();
    $.ajax({
        url: "https://formspree.io/pokiypitt+rsvp@gmail.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Muchas gracias por confirmar tu asistencia!');
    return false;
});