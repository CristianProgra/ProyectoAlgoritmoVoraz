document.getElementById("agregarFila").addEventListener("click", () => {
    const tabla = document.getElementById("tablaActividades");
    const fila = document.createElement("tr");

    const celdaInicio = document.createElement("td");
    const inputInicio = document.createElement("input");
    inputInicio.type = "number";
    celdaInicio.appendChild(inputInicio);

    const celdaFin = document.createElement("td");
    const inputFin = document.createElement("input");
    inputFin.type = "number";
    celdaFin.appendChild(inputFin);

    fila.appendChild(celdaInicio);
    fila.appendChild(celdaFin);
    tabla.appendChild(fila);
});

document.getElementById("seleccionarActividades").addEventListener("click", () => {
    const tabla = document.getElementById("tablaActividades").rows;
    const actividades = [];

    for (let i = 1; i < tabla.length; i++) {
        const inicio = parseInt(tabla[i].cells[0].querySelector("input").value, 10);
        const fin = parseInt(tabla[i].cells[1].querySelector("input").value, 10);
        if (!isNaN(inicio) && !isNaN(fin)) {
            actividades.push([inicio, fin]);
        }
    }

    const resultado = seleccionActividades(actividades);
    document.getElementById("lista").textContent = JSON.stringify(resultado);
});

function seleccionActividades(actividades) {
    const actividadesOrdenadas = actividades.sort((a, b) => a[1] - b[1]);
    const seleccionadas = [];
    let tiempoFinAnterior = 0;

    for (const [inicio, fin] of actividadesOrdenadas) {
        if (inicio >= tiempoFinAnterior) {
            seleccionadas.push([inicio, fin]);
            tiempoFinAnterior = fin;
        }
    }
    return seleccionadas;
}