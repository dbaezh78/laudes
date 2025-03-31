function calcularLiturgia() {
    const fechaInput = document.getElementById("fecha").value;
    const fecha = new Date(fechaInput);

    if (isNaN(fecha)) {
        document.getElementById("resultado").textContent = "Ingresa una fecha válida";
        return;
    }

    const diaSemana = fecha.toLocaleDateString("es-ES", { weekday: "long" });
    const tiempoLiturgico = obtenerTiempoLiturgico(fecha);
    const semanaTiempoLiturgico = obtenerSemanaTiempoLiturgico(fecha, tiempoLiturgico);

    const resultado = `
        Día de la semana: ${diaSemana}<br>
        Tiempo litúrgico: ${tiempoLiturgico}<br>
        Semana del tiempo litúrgico: ${semanaTiempoLiturgico}
    `;

    document.getElementById("resultado").innerHTML = resultado;
}

function obtenerTiempoLiturgico(fecha) {
    // Aquí deberías implementar la lógica para determinar el tiempo litúrgico
    // según la fecha ingresada. Esto es complejo y depende del calendario litúrgico católico.
    // Puedes usar librerías externas o implementar las reglas manualmente.

    // Ejemplo simplificado (¡necesita ser mejorado!):
    const mes = fecha.getMonth() + 1;
    if (mes >= 12 || mes <= 1) {
        return "Navidad";
    } else if (mes >= 2 && mes <= 3) {
        return "Cuaresma";
    } else if (mes >= 4 && mes <= 5) {
        return "Pascua";
    } else {
        return "Tiempo Ordinario";
    }
}

function obtenerSemanaTiempoLiturgico(fecha, tiempoLiturgico) {
    // Aquí deberías implementar la lógica para calcular la semana dentro del tiempo litúrgico.
    // Esto también es complejo y depende del calendario litúrgico.

    // Ejemplo simplificado (¡necesita ser mejorado!):
    const dia = fecha.getDate();
    return `Semana ${Math.ceil(dia / 7)}`;
}