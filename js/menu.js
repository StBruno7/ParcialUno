var a = false

function mostrarMenu(){
    var b = document.getElementById("menu")

    if(a == false){
        b.classList.remove("ocultar")
        b.classList.add("mostrar")
        a = true
    }else{
        b.classList.add("ocultar")
        a = false
    }
}