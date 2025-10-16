function mensaje(){
    var nombre = document.getElementById("nombre").value; 
    var correo = document.getElementById("correo").value;
    if (nombre === "" || correo ==="" ){
        alert("Ingresa los datos solicitados");
    }
    else {
        alert(nombre + " Tus datos han sido enviados, gracias por contactarnos.");
    }

}

let tema = localStorage.getItem('tema');
const temaBoton = document.getElementById("tema");

const activar = () => {
    document.body.classList.add('tema');
    localStorage.setItem('tema', 'active');
}

const desactiva = () => {
    document.body.classList.remove('tema');
    localStorage.setItem('tema', 'inactive')
}
if (tema === 'active') {
    document.body.classList.add('tema');
}
temaBoton.addEventListener("click", () =>{
    tema = localStorage.getItem('tema');
    tema !== "active" ? activar() : desactiva()
})