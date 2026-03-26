function clicar(){
    var velhtml = document.getElementById('vel');
    var vel = Number(velhtml.value);
    divi = document.querySelector('div#msg');

    if (vel > 70){
        divi.innerHTML = 'Tá acima da velocidade';
        divi.style.color = 'red'
    } else {
        divi.innerHTML = 'Ta nos conformes'
        divi.style.color = 'green'
    }
}