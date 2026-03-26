d1 = document.getElementById('area');
d1.addEventListener('click', clicar);
d1.addEventListener('mouseenter', entrar);
d1.addEventListener('mouseout', sair);

function clicar(){
    d1.innerHTML = 'Ai meus olhos'
    d1.style.background = 'red'
}

function entrar(){
    d1.innerHTML = 'Entrou'

}

function sair(){
    d1.innerHTML = 'Saiu'
    d1.style.background = 'green'
}