<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['confirmado'])) {
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $sexo = $_POST['sexo'];
    $profesion = $_POST['profesion'];
    $pasatiempo = $_POST['pasatiempo'];

    echo "
    
    
    <!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Formulario de Datos</title>
    <link rel='StyleSheet' href='../css/style.css'>
    <script src='js/acciones.js'></script>
</head>
<body>
    <h2>Datos Confirmados!</h2>

    <p><strong>Nombre:</strong> $nombre </p>
    <p><strong>Edad:</strong> $edad</p>
    <p><strong>Sexo:</strong> $sexo</p>
    <p><strong>Profesión:</strong> $profesion</p>
    <p><strong>Pasatiempo:</strong> $pasatiempo</p>

</body>
</html>     
    ";  
}
?>