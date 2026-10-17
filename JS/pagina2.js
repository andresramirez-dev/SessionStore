function mostrarNombre(){
    const nombre = sessionStorage.getItem("nombre");
    const ciudad = sessionStorage.getItem("ciudad");

    if(nombre === null || ciudad === null){
        document.getElementById("saludo").textContent = "No hay ningun nombre guardado";
        document.getElementById("ciudad").textContent = "No hay una ciudad guardada";

    }else{
        document.getElementById("saludo").textContent = "Hola " + nombre + " de " + ciudad;
    }
}

function borrar(){
    sessionStorage.clear();
    mostrarNombre();
}

document.addEventListener("DOMContentLoaded", mostrarNombre);

document.getElementById("btn-borrar").addEventListener("click", borrar);