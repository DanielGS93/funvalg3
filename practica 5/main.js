function mostrarMenú() {
    return prompt(
        "Seleccione una opción:\n" +
        "1. Calcular el área de un cuadrado\n" +
        "2. Calcular el área de un rectángulo\n" +
        "3. Calcular el área de un triángulo"
    );
}

function pedirNúmero(mensaje) {
    let número;
    do {
        número = parseFloat(prompt(mensaje));
        if (isNaN(número) || número <= 0) {
            alert("Por favor, ingrese un número válido mayor que 0.");
        }
    } while (isNaN(número) || número <= 0);
    return número;
}

function calcularÁrea() {
    let opción = mostrarMenú();

    switch (opción) {
        case "1": { // Cuadrado
            let lado = pedirNúmero("Ingrese el lado del cuadrado:");
            let área = lado * lado;
            alert(`El área del cuadrado es: ${área}`);
            break;
        }
        case "2": { // Rectángulo
            let base = pedirNúmero("Ingrese la base del rectángulo:");
            let altura = pedirNúmero("Ingrese la altura del rectángulo:");
            let área = base * altura;
            alert(`El área del rectángulo es: ${área}`);
            break;
        }
        case "3": { // Triángulo
            let base = pedirNúmero("Ingrese la base del triángulo:");
            let altura = pedirNúmero("Ingrese la altura del triángulo:");
            let área = (base * altura) / 2;
            alert(`El área del triángulo es: ${área}`);
            break;
        }
        default:
            alert("Opción no válida. Intente nuevamente.");
            calcularÁrea(); // Llamada recursiva para volver a intentar
            break;
    }
}

calcularÁrea();
