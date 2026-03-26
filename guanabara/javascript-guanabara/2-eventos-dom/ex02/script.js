function somar(){
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var res = document.getElementById('resultado');
    somado = Number(n1.value) + Number(n2.value);
    res.innerHTML = somado;
}