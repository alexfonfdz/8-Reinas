let miArreglo = [1, 2, 4, 3, 5, 4, 7, 9];

let valorAEliminar = 4;

// Encuentra la última ocurrencia del valor que quieres eliminar
let indiceUltimaOcurrencia = miArreglo.lastIndexOf(valorAEliminar);

// Verifica si el valor existe en el arreglo
if (indiceUltimaOcurrencia !== -1) {
    // Elimina solo la última ocurrencia del valor
    miArreglo.splice(indiceUltimaOcurrencia, 1);

    console.log("Arreglo después de eliminar la última ocurrencia:", miArreglo);
    console.log(indiceUltimaOcurrencia)
} else {
    console.log("El valor no existe en el arreglo.");
    console.log(indiceUltimaOcurrencia)
}