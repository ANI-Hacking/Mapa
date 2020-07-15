<!DOCTYPE html>
<html lang="es">
  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Maps</title>
</head>
<body>
  <div class="container pt-2 mb-2">
    <div class="row">
      <div class="col-4">
        <button type="button" onclick="get_my_location()" class="btn btn-primary ">My Localizacion</button>
      </div>
      <div class="col-4">
        <input type="text" id="autocomplete" class="form-control" placeholder="Destino">
      </div>
      <div class="col-4">
        <button type="button" onclick="draw_rute_mapw()" class="btn btn-primary ">Trasar Ruta</button>
      </div>
    </div>
  </div>
  <div id="map"></div>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqGp0KB8EEw8q4m4sKfMaqbTEhLzDTRPM&callback=initMap&libraries=places"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <script src="Script/Info-<?php echo $_GET['usuario']?>.js"></script> 
  <script async src="main.js"></script>
  
    
</body>
</html>