var map;
var directionsService;
var directionsRenderer;
var marker;
var infowindow;
var contentString;
var myposition;
function initMap() {
    directionsService = new google.maps.DirectionsService();
    marker = new google.maps.Marker();
    directionsRenderer = new google.maps.DirectionsRenderer({
            polylineOptions:{
                strokeColor:'#2e9afe'
            }
        });
    var coord = {lat: 6.8147619, lng: -74.0475746};
    var coord2 = {lat: 6.047012, lng: -75.659912};


    map = new google.maps.Map(document.getElementById('map'), {
        center: coord,
        zoom: 7,
    });
    /*var infowindow2;
    var marker2;
    $.ajax({
        type: "GET",
        url: "Peajes/Santander.json",
        success: function (res) {
            res.forEach(element => {
                infowindow2 = new google.maps.InfoWindow({
                    content: '<img src="'+element['Imagen']+'"></img>'
                });
                marker2 = new google.maps.Marker({
                    icon: 'peaje.png',
                    position : element['Posicion'],
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    map: map,
                    title: element['Nombre']
                });
                marker2.addListener('click', peajes_info);
            });
        }
    });
    function peajes_info() {
        if (marker2.getAnimation() !== null) {
          marker2.setAnimation(null);
          infowindow2.close(map, marker2);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          infowindow2.open(map, marker2);
        }
    }*/

}
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
    //initMap();
    var seperar = $("#destino").val().split(',');
    var destino = {lat: parseFloat(seperar[0]), lng: parseFloat(seperar[1])};
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
           directionsRenderer.setDirections(response);
           directionsRenderer.setMap(map);
           directionsRenderer.setOptions({suppressMarkers: false});
       }
   })
}