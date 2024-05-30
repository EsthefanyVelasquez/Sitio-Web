<?php
include 'conexion.php'; // Asegúrate de que este archivo existe y está configurado correctamente

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $tipo = $_POST['tipo'];
    $numero_tarjeta = $_POST['numero_tarjeta'];
    $fecha_expiracion = $_POST['fecha_expiracion'];
    $cvv = $_POST['cvv'];

    // Asegúrate de que la consulta SQL es correcta y que los nombres de las columnas coinciden con tu base de datos
    $sql = "INSERT INTO metodos_pago (nombre, tipo, numero_tarjeta, fecha_expiracion, cvv) 
            VALUES ('$nombre', '$tipo', '$numero_tarjeta', '$fecha_expiracion', '$cvv')";

    if ($conn->query($sql) === TRUE) {
        // Mostrar recibo después de insertar los datos
        echo "<!DOCTYPE html>";
        echo "<html lang='en'>";
        echo "<head>";
        echo "<meta charset='UTF-8'>";
        echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
        echo "<title>Recibo de Compra</title>";
        echo "<style>";
        echo "body {";
        echo "font-family: Arial, sans-serif;";
        echo "background-color: #f2f2f2;";
        echo "padding: 20px;";
        echo "}";
        echo ".recibo {";
        echo "background-color: #fff;";
        echo "border-radius: 10px;";
        echo "padding: 20px;";
        echo "box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);";
        echo "max-width: 600px;";
        echo "margin: 0 auto;";
        echo "}";
        echo ".recibo h1 {";
        echo "text-align: center;";
        echo "}";
        echo ".recibo .datos {";
        echo "margin-top: 30px;";
        echo "}";
        echo ".recibo .datos p {";
        echo "margin: 10px 0;";
        echo "}";
        echo "</style>";
        echo "</head>";
        echo "<body>";
        echo "<div class='recibo'>";
        echo "<h1>Recibo de Compra</h1>";
        echo "<div class='datos'>";
        echo "<p><strong>Nombre:</strong> $nombre</p>";
        echo "<p><strong>Tipo:</strong> $tipo</p>";
        echo "<p><strong>Número de Tarjeta:</strong> $numero_tarjeta</p>";
        echo "<p><strong>Fecha de Expiración:</strong> $fecha_expiracion</p>";
        echo "<p><strong>CVV:</strong> $cvv</p>";
        echo "</div>";
        echo "</div>";
        echo "</body>";
        echo "</html>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    echo "Método no permitido";
}
?>

