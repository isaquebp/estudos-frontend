function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados novamente.")
    } else {
        fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            var genero = 'Homem';
            if(idade >= 0 && idade <= 10){
                // bebe
                img.setAttribute('src', 'estilos/galeria/homem-bebe.png')
            } else if (idade < 18){
                // jovem
                img.setAttribute('src', 'estilos/galeria/homem-jovem.png')
            } else if (idade < 40){
                // adulto
                img.setAttribute('src', 'estilos/galeria/homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'estilos/galeria/homem-idoso.png')
            }
        } else if (fsex[1].checked){
            var genero = 'Mulher';
            if(idade >= 0 && idade <= 10){
                // bebe
                img.setAttribute('src', 'estilos/galeria/mulher-bebe.png')
            } else if (idade < 18){
                // jovem
                img.setAttribute('src', 'estilos/galeria/mulher-jovem.png')
            } else if (idade < 40){
                // adulta
                img.setAttribute('src', 'estilos/galeria/mulher-adulta.png')
            } else {
                // idosa
                img.setAttribute('src', 'estilos/galeria/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Gênero: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}