// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-34.4667556, -58.5092941), // Quinta de Anchorena, Anchorena 477, San Isidro, Buenos Aires, Argentina

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#8b8b8b"},{"saturation":"0"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#b4934a"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#b4934a"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#b4934a"},{"lightness":"85"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#b4934a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#b4934a"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#b4934a"},{"lightness":"60"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#b4934a"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"},{"lightness":"0"},{"weight":"3.19"},{"saturation":"0"},{"gamma":"1.04"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#b4934a"},{"lightness":"60"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.text.fill","stylers":[{"color":"#b4934a"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#b4934a"},{"lightness":"60"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#b4934a"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#b4934a"},{"lightness":"60"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#b4934a"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b48620"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"100"},{"saturation":"80"},{"color":"#b4934a"},{"gamma":"1.70"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#b4934a"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('quinta-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Infowindow with Address
    var infowindow =  new google.maps.InfoWindow({
        content: "<h1 id='map-info'>Quinta de Anchorena</h1><p>Anchorena 477, San Isidro, Buenos Aires, Argentina</p>"
    });

    // Custom Marker Icon
    var icon = {
        url: "../images/map-marker-xl.svg", // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
    };

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.4667556, -58.5092941),
        map: map,
        title: 'Quinta de Anchorena',
        icon: icon
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, this);
    });

}

