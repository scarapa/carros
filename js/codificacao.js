$(document).ready(function () {
    //ALTERAR PALAVRAS CORINGAS HTML
    $(".codigoHTML").each(function () {
        let dicionario = ["div"];
        for (let c = 0; c < dicionario.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionario[c], "<span style='color:blue'>" + dicionario[c] + "</span>"));
        }
    });

    //ALTERAR PALAVRAS CORINGAS PHP
    $(".codigoPHP").each(function () {
        let dicionario = ["echo", "else", "else if", "elseif", "include", "extends", "function", "if", "print_r", "return", "require", "this"];
        for (let c = 0; c < dicionario.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionario[c], "<span style='color:blue;font-weight:bold;'>" + dicionario[c] + "</span>"));
        }
    });

    //ALTERAR PALAVRAS CORINGAS JS
    $(".codigoJS").each(function () {
        let dicionario = ["alert", "else", "else if", "elseif", "function", "if", "let", "print_r", "return", "this", "var"];
        for (let c = 0; c < dicionario.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionario[c], "<span style='color:blue'>" + dicionario[c] + "</span>"));
        }
    });

    //ALTERAR PALAVRAS CORINGAS JS
    $(".codigoMySQL").each(function () {
        let dicionarioAzul = [" int","bigint","CURRENT_TIMESTAMP","timestamp","mediumtext"," time","varchar","last_insert_id"];
        for (let c = 0; c < dicionarioAzul.length; c++) {
            $(this).html(replaceAll($(this).html(),dicionarioAzul[c],"<span style='color:blue'>"+dicionarioAzul[c]+"</span>"));
        }
        
        let dicionarioVermelho = ["NOT NULL","DEFAULT","ON UPDATE"];
        for (let c = 0; c < dicionarioVermelho.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionarioVermelho[c], "<span style='color:#800000'>"+dicionarioVermelho[c]+"</span>"));
        }
    });
    //ALTERAR PALAVRAS CORINGAS JS
    $(".codigoJava").each(function () {
        let dicionarioVermelho = [" double"," new"," public void","class","import"];
        for (let c = 0; c < dicionarioVermelho.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionarioVermelho[c], "<span style='color:#800000'>"+dicionarioVermelho[c]+"</span>"));
        }
    });

});	

