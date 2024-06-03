alert('Ingresaste al Inicio de la pagina');

let titulo1 = document.querySelector(".titulo1")


titulo1.addEventListener("mouseover", cambiarColor );
function cambiarColor(event){
event.target.style.color="green";

};


titulo1.addEventListener("mouseout", event => {
    event.target.style.color="black";
   
   
})