function guardar(){

    console.log("a")
    const nombre = document.getElementById("nombre").value.trim();


    const ciudad = document.getElementById("ciudad").value.trim();
    

    console.log(nombre, ciudad, typeof(ciudad), typeof(nombre))
     if(nombre === "" || ciudad === ""){
        document.getElementById("error").textContent = "Faltan campos por completar"

    }else{
        window.location.href = "pagina2.html";
            sessionStorage.setItem("nombre", nombre);
            sessionStorage.setItem("ciudad", ciudad);
    }
    
}

document.getElementById("btn-guardar").addEventListener("click", guardar);