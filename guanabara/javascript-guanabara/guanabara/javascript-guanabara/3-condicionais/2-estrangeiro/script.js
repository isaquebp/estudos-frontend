function ver() {
    var pais = document.getElementById('pais').value
    msg = document.getElementById('msg');
    if (pais == 'Brasil'){
        msg.innerHTML = 'Você é brasileiro'
        msg.style.color = 'green'
    } else {
        msg.innerHTML = 'Você é estrangeiro'
        msg.style.color = 'red'
    }
}