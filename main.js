var myposition;
$(document).ready(function () {
    
    var sPageURL = window.location.search.substring(1).replace(/=/gi,":").replace(/&/gi,":");
    var permiso = sPageURL.split(':');
    $.ajax({
        type: "GET",
        url: "Puntos/Class.php",
        data:{usuario:""+permiso[1], departamento : ""+permiso[3] },
        success: function (res) {
            //console.log(res);
        }
    });
});
function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
      infowindow.close(map, marker);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      infowindow.open(map, marker);
    }
}
function get_my_location(){
   if(navigator.geolocation){
        infowindow = new google.maps.InfoWindow({
            content: '<h3>Mi Ubicacion</h3>'
        });
       navigator.geolocation.getCurrentPosition(function(position){
        myposition = {lat: position.coords.latitude, lng: position.coords.longitude};
        var image = {
            url: 'user.png',
          };
        marker = new google.maps.Marker({
            icon: image,
            position : myposition,
            draggable: true,
            animation: google.maps.Animation.DROP,
            map: map,
            title:"Hello World!"
        });
        marker.addListener('click', toggleBounce);

       })
   }
}


function draw_rute_mapw() {
    $.ajax({
        type: "GET",
        url: "https://maps.googleapis.com/maps/api/place/autocomplete/json?",
        data:{input: ""+$("#autocomplete").val(), types : 'geocode', key: 'AIzaSyBqGp0KB8EEw8q4m4sKfMaqbTEhLzDTRPM'},
        success: function (response) {
            console.log(response);
        }
    });
    /*var destino = {lat: parseFloat(seperar[0]), lng: parseFloat(seperar[1])};
    marker = new google.maps.Marker({
        position : destino,
        draggable: true,
        animation: google.maps.Animation.DROP,
        map: map,
        title:"Hello World!"
    });
    marker.addListener('click', toggleBounce);

   
   var start = new google.maps.LatLng(myposition.lat, myposition.lng);
   var end = new google.maps.LatLng(destino);
   var request = {
       origin: start,
       destination: end,
       travelMode: google.maps.TravelMode.DRIVING
   }
   directionsService.route(request, function(response, status){
       if(status == google.maps.DirectionsStatus.OK){
           console.log(response);
           directionsRenderer.setDirections(response);
           directionsRenderer.setMap(map);
           directionsRenderer.setOptions({suppressMarkers: false});
       }
   })*/
}