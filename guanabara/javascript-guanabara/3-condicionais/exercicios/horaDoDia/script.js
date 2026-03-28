function carregar(){
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        // BOm dia
        imagem.src = 'estilo/galeria/manha.png'
        document.body.style.background = '#d8b78d'
    } else if (hora >= 12 && hora <= 18){
        // Boa tarde
        imagem.src = 'estilo/galeria/tarde.png'
        document.body.style.background = '#94818a'
    } else {
        // Boa noite
        imagem.src = 'estilo/galeria/noite.png'
        document.body.style.background = '#132529'
    }
}