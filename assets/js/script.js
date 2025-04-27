const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#enviarCorreo').click(function(){
    alert("Correo enviado correctamente")
});

$("#textorojo").dblclick(
    function() {$(this).css({"color": "#DC3545"})},
);

$("#textorojo1").dblclick(
    function() {$(this).css({"color": "#DC3545"})},
);

$(document).ready(function() { 
    $(".text_oculto").on("click",function() { 
        $(".todo").toggle(); 
    });
    $(".mostrar").on("click",function() { 
        if ($(".text_oculto").is(":hidden")){
        $(".todo").toggle();
        } 
    });
});