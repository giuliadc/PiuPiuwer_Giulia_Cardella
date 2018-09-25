function adicionapiuexterno(username, img, message) {
            var text = document.querySelector("#formoi");
            var texto = message;
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
            var tab = document.querySelectorAll(".tab");
            var tbody = document.querySelector("#tab1");
            var linhas = tbody.getElementsByTagName("tr");
                
            var lenght = linhas.length;
            n = String(lenght+1);
            NovoPiuTr.setAttribute("id", n)
                
            var UsuarioTd = document.createElement("td");
            var CurtidasTd = document.createElement("td");
            var FotoTd = document.createElement("IMG");
            var NovoPiuwerTd = document.createElement("td");
            var BotaoTd = document.createElement("td");
            var Botao2Td = document.createElement("td");
            var Usuario = document.createElement("blockquote");
            
            var NovoPiu = document.createElement("p")
            NovoPiu.textContent = texto;
                
            var Curtidas = document.createElement("blockquote");
            
            var x = document.createElement("INPUT");
            x.setAttribute("type", "image");
            x.setAttribute("id","curtir");
            x.setAttribute("src","img/botao.png");
            x.setAttribute("width", "20");
            x.setAttribute("height", "20");
            x.setAttribute("onclick", "curtir(" +n + ")"); 
            BotaoTd.appendChild(x);
            
            var lixo = document.createElement("INPUT");
            lixo.setAttribute("type", "image");
            lixo.setAttribute("id","excluir");
            lixo.setAttribute("src","img/delete.png");
            lixo.setAttribute("width", "20");
            lixo.setAttribute("height", "20");
            lixo.setAttribute("onclick", "deleteRow(" +n + ")");
            Botao2Td.appendChild(lixo);
                
            BotaoTd.appendChild(x);
            FotoTd.setAttribute("src", img);
            FotoTd.setAttribute("width", "30");
            FotoTd.setAttribute("height", "30");

            Usuario.textContent = username;
            UsuarioTd.appendChild(Usuario);
                
            Curtidas.textContent = "Curtidas: 0";
            CurtidasTd.appendChild(Curtidas);
                
            NovoPiuwerTd.appendChild(NovoPiu);

            NovaTr.appendChild(FotoTd);
            NovaTr.appendChild(UsuarioTd);
            NovaTr.appendChild(CurtidasTd);
            NovaTr2.appendChild(NovoPiuwerTd);
            NovaTr2.appendChild(BotaoTd);
            NovaTr2.appendChild(Botao2Td);

            NovoPiuTab1.appendChild(NovaTr);
            NovoPiuTab2.appendChild(NovaTr2);
            NovoPiuTd.appendChild(NovoPiuTab1);
            NovoPiuTd.appendChild(NovoPiuTab2);
            NovoPiuTr.appendChild(NovoPiuTd);
            
            var tbody1 = document.querySelector("#tab1");
            tbody1.prepend(NovoPiuTr);
            return
            }
            else {
            document.getElementById("spcontando").innerHTML = "ERRO AO ENVIAR (LIMITE DE CARACTERES)";
            return
                }
            }

function Desmontarjson(arr) {
    var linha = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        adicionapiuexterno(arr[i].user, arr[i].imgUrl, arr[i].message)

    }

}
function buscardados() {
    ajax = new XMLHttpRequest();

    var url = "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7";
    ajax.open('GET', url, true);
    ajax.send();

    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            var json = JSON.parse(ajax.responseText);
            Desmontarjson(json) ;
			}
        }
}

buscardados();