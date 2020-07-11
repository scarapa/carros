/*!
 * Plugue JavaScript Library v1.0.0
 * http://plugue.com/
 *
 * Copyright 2017, Roberto Alam
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://plugue.org/license
 *
 * Date: 2017-02-12 22:33
 * Copy: 2019-03-07 21:28
 */
function print_r(input, _indent) {
    var indent = (typeof (_indent) == 'string') ? _indent + '    ' : '    '
    var parent_indent = (typeof (_indent) == 'string') ? _indent : '';
    var output = '';

// Tipo de Elemento do Array
    switch (typeof (input)) {
        case 'string':
            output = "'" + input + "'n";
            break;
        case 'number':
            output = input + "n";
            break;
        case 'boolean':
            output = (input ? 'true' : 'false') + "n";
            break;
        case 'object':
            output = ((input.reverse) ? 'Array' : 'Object') + "n";
            output += parent_indent + "(n";
            for (var i in input) {
                output += indent + '[' + i + '] => ' + print_r(input[ i ], indent);
            }
            output += parent_indent + ")n"
            break;
    }
    return output;
}

/* STRING */
function rtrim(str) { return str.replace(/s+$/," ") ; }

function converterDataEUAtoBR(data) {
    if(data.length == 0) return "";    
    var data = data.toString().split("-");
    return data[2] + "/" + data[1] + "/" + data[0];
}

function converterDataBRtoEUA(data) {
    if(data.length == 0) return "";
    var data = data.toString().split("/");
    return data[2] + "-" + data[1] + "-" + data[0];
}


function replaceTudo(string, caracterProcurar, caracterSubstituir) {
    var i = 0;
    var novaString = "";
    if(string == undefined) return string;
    while (i <= string.length) {
        if (typeof string[i] !== 'undefined') {
            if (string[i] == caracterProcurar) {
                novaString += caracterSubstituir;
            } else {
                novaString += string[i];
            }
        }
        i++;
    }
    return novaString;
}

function transformarInteiro1(valor){
    return replaceAll(replaceAll(valor,':',''), ',','')
}
function transformarInteiro2(valor){
    return replaceAll(replaceAll(valor,':',''), '.','')
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

/* AJAX */
function ajaxGenericoGet(url, variaveis) {
    var tmp = [];
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': url,
        'data': variaveis,
        'beforeSend': function () {
            //abrirCortina();
        },
        'success': function (data) {
            return tmp = jQuery.parseJSON(data)
        }, 'error': function (jqXHR, exception) {
            //console.log('ERRO');
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg)
            //$('#post').html(msg);            
        }
    });
    return tmp;
}

function ajaxGenericoGet2(url, variaveis) {
    var tmp = [];
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': variaveis,
        'beforeSend': function () {
            //abrirCortina();
        },
        'success': function (data) {
            return tmp = jQuery.parseJSON(data)
        }, 'error': function (jqXHR, exception) {
            //console.log('ERRO');
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg)
            //$('#post').html(msg);            
        }
    });
    return tmp;
}

function getGenerico(url) {
    var tmp = [];
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'datatype' : "html",
        'contentType': "text/plain",
        'url': url,
        'beforeSend': function () {
            //abrirCortina();
        },
        'success': function (data) {
            return tmp = data
        }, 'error': function (jqXHR, exception) {
            //console.log('ERRO');
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg)
        }
    });
    return tmp;
}

function ajaxGenericoPost(url, variaveis) {
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'contentType': "application/x-www-form-urlencoded;charset=ISO-8859-15",
        //'contentType': "application/x-www-form-urlencoded;charset=UTF8",        
        'url': url,
        'data': variaveis,
        'beforeSend': function () {
            //abrirCortina();
        },
        'success': function (data) {
            return tmp = jQuery.parseJSON(data)
        }, 'error': function (jqXHR, exception) {
            //console.log('ERRO');
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg)
            //$('#post').html(msg);            
        }
    });
    return tmp;
}

/* VALIDAR */
function validarTipoNumero(numero){
    if(isNaN(numero)){ return false; }
    if(numero == null) { return false;}
    if(numero == 'undefined') { return false;}
    return true;
}



//$(".dinheiro").maskMoney({decimal:",", thousands:"."});

function converterBancoParaMoedaBR(numero) {
    if(!validarTipoNumero(numero)){ return numero}
    var numero =""+numero+"";
    numero = numero.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');

}

function gerarCanvas(urlController,relatorio,nomeArquivo,tabela){
    html2canvas( tabela , {
        allowTaint: true,
        taintTest: false,
        onrendered: function(canvas) {
            var arrayVariaveis = {relatorio : relatorio , arquivo: nomeArquivo ,imagemTabela: canvas.toDataURL("image/png")};
            var retorno = ajaxGenericoPost(urlController , arrayVariaveis);        
        }
    });       
}

function arrayRetirarVazio(array){
    var arrayNovo = [];
    for (var i in array) {
        if( array[i].toString().trim() != ""){
            arrayNovo.push(array[i]);
        }
    }           
    return arrayNovo;
}

function stringContarAparicao(palavra, char) {
    palavra = palavra.toLowerCase();
    var c = 0 ;
    for (var i = 0; i < palavra.length; i++) {
        if( palavra[i] == char) { c++;  }
    }
    return c;
}

/* ELEMENTOS */

/*  st_zerar => incluir => 0 = selecione  */
function limparSelect(elemento,st_zerar){
    document.getElementById(elemento).innerHTML = "";    
    if(st_zerar){
        var select = document.getElementById(elemento);
        var option = document.createElement("option");
        option.text = "SELECIONE";
        option.value = 0;
        select.appendChild(option);      
    }
}

function carregarSelect(elemento,dados,colunaValor,colunaTexto){
    var select = document.getElementById(elemento);    
    for (var i = 0; i < dados.length; i++) {
        var option = document.createElement("option");
        option.text = dados[i][colunaTexto];
        option.value = dados[i][colunaValor];
        select.appendChild(option);
    }      
}

function desabilitarBotao(id_elemento,flag){
    if(flag){
        document.getElementById(id_elemento).classList.add("habilitarBotao");
        document.getElementById(id_elemento).classList.remove("desabilitarBotao");
    }else{
        document.getElementById(id_elemento).classList.add("desabilitarBotao");
        document.getElementById(id_elemento).classList.remove("habilitarBotao");
    }
}


function desabilitarElemento(elemento_id="",elemento_nome="",elemento_classe="",flag){
    if(elemento_id != ""){
        if(flag){
            document.getElementById(elemento_id).classList.add("elementoHabilitar");
            document.getElementById(elemento_id).classList.remove("elementoDesabilitar");
        }else{
            document.getElementById(elemento_id).classList.add("elementoDesabilitar");
            document.getElementById(elemento_id).classList.remove("elementoHabilitar");
        }
    }else if(elemento_nome != "" ){
        if(flag){
            document.getElementsByName(elemento_nome).classList.add("elementoHabilitar");
            document.getElementsByName(elemento_nome).classList.remove("elementoDesabilitar");
        }else{
            document.getElementsByName(elemento_nome).classList.add("elementoDesabilitar");
            document.getElementsByName(elemento_nome).classList.remove("elementoHabilitar");
        }
        
    }else if(elemento_classe != ""){
        
        var elemento = document.querySelectorAll("."+elemento_classe+"");
        var numberclass =  document.querySelectorAll("."+elemento_classe+"").length; 
        if(flag){
            for(var i = 0; i< numberclass; i++) {
                elemento[i].classList.add("elementoHabilitar");
                elemento[i].classList.remove("elementoDesabilitar");
            }
            
        }else{
            for(var i = 0; i< numberclass; i++) {
                elemento[i].classList.remove("elementoHabilitar");
                elemento[i].classList.add("elementoDesabilitar");
            }            
        }        
        
    }else{
        //NAO FAZ NADA
    }
}



function mascaraGenerica(elemento , mascara , event){
    var charEspecial = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?.";       
    var texto = '';

    for (i=0; i < elemento.value.length ; i++) {
        if( compararTipo(elemento.value[i],mascara[i]) ) { texto += texto = elemento.value[i];}                 
    }
    //SE A TECLA FOR BACKSPACE, DESCONSIDERA O AUTOPRENCHIMENTO
    if(event.keyCode != 8){
        //CASO O PROXIMO CHARACTER SEJA ESPECIAL(charEspecial), PREENCHE AUTOMATICAMENTE
        var stCharEspecialMascara = (charEspecial.indexOf(mascara[i]) > -1)  ? charEspecial.indexOf(mascara[i]): -1 ; 
        if( stCharEspecialMascara > -1) { texto = texto+mascara[i];    }
    }
    document.getElementsByName(elemento.name)[0].value = texto.substring(0,mascara.length);
    document.getElementsByName(elemento.name)[0].maxLength = mascara.length;
    
    function compararTipo(valor1,valor2){
        return ( Number.isInteger(parseInt(valor1))==Number.isInteger(parseInt(valor2)) ) ? true : false ;
    }
}


//https://pt.stackoverflow.com/questions/188190/formatar-moeda-com-separador-de-milhar