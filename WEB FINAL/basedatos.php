<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tienda_online";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recibir datos del formulario
    $contacto = $_POST['contacto'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $pais = $_POST['pais'];
    $cedula = $_POST['cedula'];
    $direccion = $_POST['direccion'];
    $casa = $_POST['casa'];
    $telefono = $_POST['telefono'];
    $metodo_pago = $_POST['metodo_pago'];

    // Preparar y ejecutar la inserción en la base de datos
    $sql = "INSERT INTO usuarios (contacto, nombre, apellido, pais, cedula, direccion, casa, telefono, metodo_pago) 
            VALUES ('$contacto', '$nombre', '$apellido', '$pais', '$cedula', '$direccion', '$casa', '$telefono', '$metodo_pago')";

    if ($conn->query($sql) === TRUE) {
        // Redireccionar a formulario.html con los datos en la URL
        $params = http_build_query([
            'contacto' => $contacto,
            'nombre' => $nombre,
            'apellido' => $apellido,
            'pais' => $pais,
            'cedula' => $cedula,
            'direccion' => $direccion,
            'casa' => $casa,
            'telefono' => $telefono,
            'metodo_pago' => $metodo_pago
        ]);
        header('Location: formulario.html?' . $params);
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    echo "Método de solicitud no permitido";
}
?>