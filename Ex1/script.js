function inserir(){
    let para = document.getElementsByClassName("bearFigure").innerHTML
    let ident = document.getElementById("bearsContainer")
    ident.appendChild(para)
}

window.onclick=inserir()