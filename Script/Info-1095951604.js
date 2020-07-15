var map;
            var directionsService;
            var directionsRenderer;
            var marker;
            function initMap() {
                directionsService = new google.maps.DirectionsService();
                marker = new google.maps.Marker();
                directionsRenderer = new google.maps.DirectionsRenderer({
                        polylineOptions:{
                            strokeColor:"#2e9afe"
                        }
                    });
                var coord = {lat: 6.8147619, lng: -74.0475746};
                map = new google.maps.Map(document.getElementById("map"), {
                    center: coord,
                    zoom: 7,
                });
                var autocomplete = document.getElementById("autocomplete");
                const search = new google.maps.places.Autocomplete(autocomplete);
                search.bindTo("bounds",map);
                
                var infowindow0 = new google.maps.InfoWindow({
                    content: "<img src='https://lh5.googleusercontent.com/p/AF1QipNsukSA--kHCUXzpKUgTv2K1PzFFYnqmg9hdWse=w408-h306-k-no'></img>" 
                });
                    var marker0 = new google.maps.Marker({
                    icon: "peaje.png",
                    position : {"lat":6.825877,"lng":-72.999826},
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    map: map,
                    title: "Peaje Los Curos 7900"
                });
                marker0.addListener("click", toggleBounce0);
                function toggleBounce0() {
                    if (marker0.getAnimation() !== null) {
                      marker0.setAnimation(null);
                      infowindow.close(map, marker0);
                    } else {
                      marker0.setAnimation(google.maps.Animation.BOUNCE);
                      infowindow0.open(map, marker0);
                    }
                }
            var infowindow1 = new google.maps.InfoWindow({
                    content: "<img src='https://lh5.googleusercontent.com/p/AF1QipMD4OKYUWR-p2Cuu2srw6cZAxkKhSmbF-_EUs3w=w408-h306-k-no'></img>" 
                });
                    var marker1 = new google.maps.Marker({
                    icon: "peaje.png",
                    position : {"lat":6.929806,"lng":-73.033853},
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    map: map,
                    title: "Peaje La Punta"
                });
                marker1.addListener("click", toggleBounce1);
                function toggleBounce1() {
                    if (marker1.getAnimation() !== null) {
                      marker1.setAnimation(null);
                      infowindow.close(map, marker1);
                    } else {
                      marker1.setAnimation(google.maps.Animation.BOUNCE);
                      infowindow1.open(map, marker1);
                    }
                }
            }