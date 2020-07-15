<?php
    class Service_info_peajes{
        private static $service_info_peajes = null;
        public function __construct() {

        }
        public function getInstance(){ 
            if(self::$service_info_peajes === null){
                self::$service_info_peajes = new Service_info_peajes();
            }
            return self::$service_info_peajes;
        }
        public function crear_info($departamento, $usuario){
            $data = json_decode(file_get_contents("../Peajes/".$departamento.".json"), true);
            $cadena = 'var map;
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
                
                ';

                


            foreach ($data as $key => $value) {
                $cadena .= 'var infowindow'.$key.' = new google.maps.InfoWindow({
                    content: "<img src=\''.$value['Imagen'].'\'></img>" 
                });
                    var marker'.$key.' = new google.maps.Marker({
                    icon: "peaje.png",
                    position : '.json_encode($value["Posicion"]).',
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    map: map,
                    title: "'.$value['Nombre'].'"
                });
                marker'.$key.'.addListener("click", toggleBounce'.$key.');
                function toggleBounce'.$key.'() {
                    if (marker'.$key.'.getAnimation() !== null) {
                      marker'.$key.'.setAnimation(null);
                      infowindow.close(map, marker'.$key.');
                    } else {
                      marker'.$key.'.setAnimation(google.maps.Animation.BOUNCE);
                      infowindow'.$key.'.open(map, marker'.$key.');
                    }
                }
            ';
            }
            $cadena .= '}';
            $f = fopen("../Script/Info-".$usuario.".js", "w+");
            fwrite($f, $cadena);
            fclose($f);
            echo "Script/Info-".$usuario.".js";
        }
    }
    if(isset($_GET['departamento']) && isset($_GET['usuario'])){
        Service_info_peajes::getInstance()->crear_info($_GET['departamento'],$_GET['usuario']);
    }
?>