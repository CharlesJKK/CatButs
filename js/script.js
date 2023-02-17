//Ativar menu do Header.
const links = Array.from(document.querySelectorAll('.nav ul li a'))

console.log(links)

function menuAtivo(link){
    const url = window.location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo");
    }
}

links.forEach(menuAtivo)