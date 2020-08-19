
// Extração do texto do artigo

let element = document.getElementsByClassName("article")[1];
let text = element.textContent;

// Lista de migués - Colabore aqui!
migues = ["upon request", "on request", "data not available", "supplementary material"]

result = migues.find(migue => text.includes(migue))

// Checagem
if (result) {

    title = document.getElementsByClassName("content-title")[0]

    // Criação e ligação do elemento HTML

    aviso = document.createElement('div');
    aviso_text = document.createTextNode(`Miguezômetro achou esse artigo suspeito... Ele contém as palavras-chave "${result}"`);
    aviso.appendChild(aviso_text);
    aviso.setAttribute("style", "border: 1px solid darkviolet;background-color: thistle;padding: 0.3923em 0.6923em;border-radius: 5px;");
    title.parentElement.appendChild(aviso);
}
