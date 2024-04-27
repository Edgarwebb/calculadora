var cantidad="";

var acumulado=0;

var p_operacion=true;

var sumar=false;

var restar=false;


function displayNumeros(numero){

    document.getElementById("display").value = cantidad + numero;

    cantidad = document.getElementById("display").value;

}

function suma() {

    if(restar){
    acumulado = acumulado + parseInt(cantidad);
    document.getElementById("display").value = acumulado;

    }else{

    acumulado=acumulado + parseInt(cantidad);
    document.getElementById("display").value=acumulado;
    }

    cantidad = "";
    sumar = true;
    resta=false;
}

function resta(){

    if(p_operacion==false){
    
    if (sumar) {

        acumulado=acumulado+parseInt(cantidad);
        document.getElementById("display").value=acumulado;
    
    }else{

        acumulado=acumulado-parseInt(cantidad);
        document.getElementById("display").value=acumulado;
    }

    
    }else{

    acumulado=parseInt(cantidad);

    p_operacion=false;

}

    cantidad ="";
    sumar = false;
    restar = true;

}

function resultado() {

    if(sumar) {

        document.getElementById("display").value=acumulado+parseInt(cantidad);

    } else if(restar) {

        document.getElementById("display").value=acumulado-parseInt(cantidad);
    }
    acumulado=parseInt(document.getElementById("display").value);
    cantidads=0;
}

