// Set the date we're counting down to
var countDownDate = new Date("Nov 18, 2018 17:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="countdown"

    document.getElementById("dias").innerHTML = days;
    document.getElementById("horas").innerHTML = hours;
    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;

    // document.getElementById("countdown").innerHTML = days + "días " + hours + "horas "
    // + minutes + "minutos " + seconds + "segundos ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cuenta-regresiva").innerHTML = "Llegó el día!";
        document.getElementById("countdown").innerHTML = "<p id='end'>Gracias por compartir este momento con nosotros!</p>";
    }
}, 1000);