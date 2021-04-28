function numeroDias(){
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes").value;
    var anyo = document.getElementById("anyo").value;
    switch(mes){
        case 'Abril':
        case 'Junio':
        case 'Septiembre':
        case 'Noviembre':
            activar("opt29");
            activar("opt30");
            ocultar("opt31");
        break;
        case 'Febrero':
            ocultar("opt31");
            ocultar("opt30");
            if(!esBisiesto(anyo)){
                ocultar("opt29");
            }else{
                activar("opt29");
            }
        break;
        default:
            activar("opt29");
            activar("opt30");
            activar("opt31");
        break;
    }
    dia.selectedIndex = "0";
}

function activar(id){
    document.getElementById(id).classList.remove("hidden");
}

function ocultar(id){
    document.getElementById(id).classList.add("hidden");
}

function esBisiesto(anyo){
    if(anyo%400 === 0 || (anyo%4===0 && anyo%100!==0)){
        return true;
    }else{
        return false;
    }
}

function validarDni(){
    var dni = document.getElementById("inp1").value;
    var letraDni = document.getElementById("inp2").value;
    var dniEntero = dni+letraDni;
    var p1 = document.getElementById("p1");
    if(/\d{8}[A-Z]/.test(dniEntero)){
        document.getElementById("p1").innerHTML = "";
        var letra='TRWAGMYFPDXBNJZSQVHLCKET';
        var resto = dni % 23;
        letra = letra.substring(resto, resto+1);
        if(letra != letraDni){
            p1.innerHTML = "La letra es incorrecta";
            p1.style.color = "red";
        }else{
            p1.innerHTML = "";
        }
    }else{
        p1.innerHTML = "El dni solo puede tener 8 numeros y una letra mayuscula";
        p1.style.color = "red";
    }
}