document.getElementById("btn-responder").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se recargue (aunque no hay envío aquí, es una buena práctica)

    // Obtener la respuesta seleccionada
    const respuestas = document.getElementsByName("respuesta");
    let seleccion = null;

    for (const respuesta of respuestas) {
        if (respuesta.checked) {
            seleccion = respuesta.value;
            break;
        }
    }

    // Validar la respuesta
    const resultado = document.getElementById("resultado");
    if (seleccion === "b") {
        resultado.textContent = "¡Correcto! La etiqueta <a> se utiliza para definir un enlace.";
        resultado.style.color = "green";
    } else if (seleccion === null) {
        resultado.textContent = "Por favor, selecciona una respuesta.";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = "Incorrecto. La respuesta correcta es <a>.";
        resultado.style.color = "red";
    }
});
