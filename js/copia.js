function contarCaracteres(box,valor,campospan){
	var conta = valor - box.length;
    var boolean = true;
	document.getElementById(campospan).innerHTML = "Você ainda pode digitar " + conta + " caracteres";
    
        if(box.length >= valor+1){
            document.getElementById(campospan).innerHTML = "Opss.. você não pode mais digitar..";
            document.getElementById("piupiu").style.backgroundColor = "red";
            document.getElementById("formoi").style.backgroundColor = "red";
            console.log("oi");
            boolean = false;
            
        }
    
        else{
            document.getElementById("piupiu").style.backgroundColor = "whitesmoke";
            document.getElementById("formoi").style.backgroundColor = "whitesmoke";
            boolean = true
            return(boolean, conta);
        }  
    
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
        else{
		document.getElementById(campospan).innerHTML = "Ainda não temos nada digitado..";
	}
}
    
function adicionapiu(img, nome) {
        var botaoAdicionar = document.querySelector("#enviar");
        botaoAdicionar.addEventListener("click", function(event) {
            event.preventDefault();

            var text = document.querySelector("#formoi");

            var texto = text.novopiu.value;
            var string = texto.length;
            if (string<=140){
            var NovoPiuTr = document.createElement("tr");
            var NovoPiuTd = document.createElement("td");
            var NovoPiuTdHid = document.createElement("td");
            var NovoPiuTab1 = document.createElement("TABLE");
            var NovoPiuTab2 = document.createElement("TABLE");
            var NovaTr = document.createElement("tr");
            var NovaTr2 = document.createElement("tr");
            var tabela = document.querySelector("#tab");
            var Row;
            var Rows;

            var UsuarioTd = document.createElement("td");
            var CurtidasTd = document.createElement("td");
            var FotoTd = document.createElement("IMG");
            var NovoPiuwerTd = document.createElement("td");
            var BotaoTd = document.createElement("td");
            var Botao = document.createElement("BUTTON")
            
            var NovoPiu = document.createElement("p")
            NovoPiu.textContent = texto;
            var Curtidas = document.createElement("blockquote")
            var x = document.createElement("BUTTON");
            x.setAttribute("src","botao.png");
            BotaoTd.appendChild(x);
            
            FotoTd.setAttribute("src", img);
            FotoTd.setAttribute("width", "30");
            FotoTd.setAttribute("height", "30");
            
            UsuarioTd.textContent = "@"+ nome;
            Curtidas.textContent = "Curtidas: 0";
            CurtidasTd.appendChild(Curtidas);
            NovoPiuwerTd.appendChild(NovoPiu);
            
            NovaTr.appendChild(FotoTd);
            NovaTr.appendChild(UsuarioTd);
            NovaTr.appendChild(CurtidasTd);
            NovaTr2.appendChild(NovoPiuwerTd);
            NovaTr2.appendChild(BotaoTd);

            NovoPiuTab1.appendChild(NovaTr);
            NovoPiuTab2.appendChild(NovaTr2);
            NovoPiuTd.appendChild(NovoPiuTab1);
            NovoPiuTd.appendChild(NovoPiuTab2);
            NovoPiuTr.appendChild(NovoPiuTd);

            var tabela = document.querySelector("#tab");
            tabela.prepend(NovoPiuTr);
            return
            }
        else {
            console.log("oi");
            var botaoNao = document.querySelector("#enviar");
            botaoNao.addEventListener("click", function(event) {
                event.preventDefault();
            document.getElementById("spcontando").innerHTML = "ERRO AO ENVIAR (LIMITE DE CARACTERES)";
            return
            });
    };
    });
};
function deleteRow(i){
    document.getElementById("tab").deleteRow(i);
    console.log(i);
}

function curtir(j){
    console.log(j);
    
    var tabela = document.querySelectorAll(".tab");
    var tab = document.querySelector("#tab");
    var NovoTr = document.createElement("tr");
    console.log(tabela[j]);
    tab.appendChild(NovoTr);
    document.getElementById("tab").deleteRow(j); 
    
}
    
/* var xhr = new XMLHttpRequest();

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);
    });

    xhr.send();*/
function deleteRow(rowid)  
{  

    var row     = document.getElementById(rowid);
    var table   = row.parentNode;
    while (table && table.tagName != 'TABLE')
    {
        table = table.parentNode;
        if (!table)
        {
            return; 
        }               
        table.deleteRow(row.rowIndex);
        counter--;
    }

    var table   = document.getElementById('rfqTable');
    var trRows  = table.getElementsByTagName('tr');
    var tdRows  = table.getElementsByTagName('td');

    for (var i = 0; i < trRows.length; i++) 
    {
        trRows[i].id = counter;
    }

    for (var i = 0; i < tdRows.length; i++) 
    {
            document.getElementById("item").innerText = counter;
    }
}
    function removerLinha(obj) {
 
                // Capturamos a referência da TR (linha) pai do objeto
                var objTR = obj.parentNode.parentNode;
                // Capturamos a referência da TABLE (tabela) pai da linha
                var objTable = document.querySelector("#tab");
                // Capturamos o índice da linha
                var indexTR = objTR.rowIndex;
                // Chamamos o método de remoção de linha nativo do JavaScript, passando como parâmetro o índice da linha  
                console.log(indexTR);
                objTable.deleteRow(obj);
                // Exibe uma mensagem de confirmação da remoção
                alert("Remoção Efetuada com Sucesso!!");
         } 
