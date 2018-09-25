function mostrarResultado(box,num_max,campospan){
	var contagem_carac = box.length;
	if (contagem_carac != 0){
		document.getElementById(campospan).innerHTML = contagem_carac + " caracteres digitados";
		if (contagem_carac == 1){
			document.getElementById(campospan).innerHTML = contagem_carac + " caracter digitado";
		}
		if (contagem_carac > num_max){
			document.getElementById(campospan).innerHTML = "Limite de caracteres excedido!";
		}
	}
    else{
		document.getElementById(campospan).innerHTML = "Ainda não temos nada digitado..";
	}
}

function contarCaracteres(box,valor,campospan){
	var conta = valor - box.length;
    var boolean = true;
	document.getElementById(campospan).innerHTML = "Você ainda pode digitar " + conta + " caracteres";
    
        if(box.length >= valor+1){
            document.getElementById(campospan).innerHTML = "Opss.. você não pode mais digitar..";
            document.getElementById("piupiu").style.backgroundColor = "red";
            document.getElementById("formoi").style.backgroundColor = "red";
            boolean = false;
        }
    
        else{
            document.getElementById("piupiu").style.backgroundColor = "whitesmoke";
            document.getElementById("formoi").style.backgroundColor = "whitesmoke";
            boolean = true
        };
};