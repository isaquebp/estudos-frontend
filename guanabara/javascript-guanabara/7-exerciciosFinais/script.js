function contar(){
    var inicio = document.getElementById('iniciotxt')
    var fim = document.getElementById('fimtxt')
    var passo = document.getElementById('passotxt')
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)
    msg = document.getElementById('msg')
    msg.innerHTML = "";

    if(inicio == 0 || fim == 0 || passo == 0){
        alert('ERRO! IMPOSSÍVEL TER PASSO 0')
        msg.innerHTML = "Impossível contar! "
    } else {
        msg.innerHTML = 'Contando: <br>'
        if(inicio <= fim){
            while (inicio <= fim){
            msg.innerHTML += inicio + ' 👉 ';
            inicio = inicio + passo
            }
            msg.innerHTML = msg.innerHTML + ' 🔥 '
        } else {
            while (inicio >= fim){
            msg.innerHTML += inicio + ' 👉 '
            inicio = inicio - passo
            }
            msg.innerHTML = msg.innerHTML + ' 🔥 '
        }
    }
}