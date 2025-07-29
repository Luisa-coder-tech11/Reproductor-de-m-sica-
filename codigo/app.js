angular.module("Reproductor",[])
.controller("ControladorReproductor",function($scope, $http){

    $scope.artistas=[];
    
    //cargue de los datos (solo posible mediante servicios)
    $http.get("datos/Musiteca.json")
    .then(function(datos){
        $scope.artistas=datos.data.Artistas;
    });
    $scope.seleccionarArtistas=function (artista){
        $scope.canciones=artista.canciones;
    }
});