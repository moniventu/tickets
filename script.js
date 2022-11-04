const valorTicket = 200;

const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const borrar = document.getElementById('borrar');
const resumen = document.getElementById('resumen');
const total = document.getElementById('total');

function totalPagar(){
    let totalValor = (cantidad.value) * valorTicket;

    if (categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);
    }

    total.innerHTML = `Total a pagar: $ ${totalValor}`;
}

resumen.addEventListener('click',totalPagar);
borrar.addEventListener('click',()=>{
    total.textContent = 'Total a pagar: $';
} );

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');

function validar (){
    let escribirNombre = (nombre.value);
    
    if (nombre.value == ""){
        escribirNombre = alert ("Por favor, escriba un nombre");
    }else if (apellido.value == ""){
        escribirApellido = alert ("Por favor, escriba un apellido");
    }else if (correo.value == ""){
        escribirCorreo = alert ("Por favor, ecriba un correo");
    }      
}
resumen.addEventListener('click',validar);
borrar.addEventListener('click',validar);

