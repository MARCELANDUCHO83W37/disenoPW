<?php
function conectar(){
    $host = "127.0.0.1";
    $user ="root";
    $pass="";
    $db="iceppracticas";
    //hacemos la conexion
    $conn = new mysqli($host,$user,$pass,$db);
    //validams la conexion
    if($conn->connect_error){
        die("Conexion fallida ". $conn->connect_error );
    }
    return $conn;
}//fin funcion conectar
?>