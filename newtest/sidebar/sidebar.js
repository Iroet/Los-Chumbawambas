//Ejecutar funcion en el evento click//
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos Variables//
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar Menu//
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move")
}

//Si el ancho de la pagina es menos a 760px, ocultara el menu al recargar la pag//
if (window.innerWidth <760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move")
}

//Haciendo el menu responsive//
window.addEventListener("resize", function() {
    if(window.innerWidth > 760) {
        body.classList.remove("boy_move");
        side_menu.classList.remove("menu__side_move");
    }

    if(window.innerWidth < 760) {
        body.classList.add("boy_move");
        side_menu.classList.add("menu__side_move");
    }
});