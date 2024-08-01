

function insert(num){
    var numero = document.getElementById('valor').innerHTML;
    if(numero == 0) {
        document.getElementById('valor').innerHTML = num;
    } else if(numero.length <= 8) {
        document.getElementById('valor').innerHTML = numero + num;
    } else {
        document.getElementById('valor').innerHTML = numero;
    }
}

function clean(){
    document.getElementById('valor').innerHTML = "0";
}

function calcular(){
    var resultado = document.getElementById('valor').innerHTML;
    if (resultado != 0){
        document.getElementById('valor').innerHTML = eval(resultado);
    }
}

function porcentagem(){
    var resultado = document.getElementById('valor').innerHTML;
    if (resultado != 0){
        document.getElementById('valor').innerHTML = resultado / 100;
    }
}

function mudarSinal(){
    var valor = document.getElementById('valor').innerHTML;
    if (valor != 0){
        document.getElementById('valor').innerHTML = valor * -1;
    }
}


