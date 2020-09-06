
// Extração do texto do artigo

let element = document.getElementsByClassName("article")[1];
let text = element.textContent;

// Lista de keywords - Colabore aqui!
let positivos = ["data is available", "zenodo", "figshare", "github", "freely available"]

let migues = ["upon request", "on request", "data not available", "supplementary material", "reasonable request"]

// Detecção

let positivo_result = positivos.find(positivo => text.includes(positivo))

let migue_result = migues.find(migue => text.includes(migue))

function createAviso(texto, estilo) {
    let title = document.getElementsByClassName("content-title")[0]

    // Criação e ligação do elemento HTML

    let aviso = document.createElement('div');
    let aviso_text = document.createTextNode(texto);
    aviso.appendChild(aviso_text);
    aviso.setAttribute("style", estilo);
    title.parentElement.appendChild(aviso);
}

// Checagem e chamadas

if (positivo_result) {


    let aviso_bom = `Migué-detector acha que esse artigo tem uma boa política de dados! Ele contém as palavras-chave "${positivo_result}"`;
    let estilo_bom = "border: 1px solid green;background-color: #a1f1a1;padding: 0.3923em 0.6923em;border-radius: 5px;";

    createAviso(aviso_bom, estilo_bom);

} else if (migue_result) {

    let aviso_ruim = `Migué-detector achou esse artigo suspeito... Ele contém as palavras-chave "${migue_result}"`;
    let estilo_ruim = "border: 1px solid darkviolet;background-color: thistle;padding: 0.3923em 0.6923em;border-radius: 5px;";

    createAviso(aviso_ruim, estilo_ruim);

} else {

    let desconhecido = `Não achamos nada nesse artigo! Talvez precisamos dar uma melhorada no nosso vocabulário...`;
    let estilo_desconhecido = "border: 1px solid #ffff02;background-color: navajowhite;padding: 0.3923em 0.6923em;border-radius: 5px;";

    createAviso(desconhecido, estilo_desconhecido);

}
