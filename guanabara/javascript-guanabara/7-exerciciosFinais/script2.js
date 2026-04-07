let numeros = []
let maiorValor = 0;
let menorValor = 0;
let valoresSomados = 0;
let mediaValores = 0;

function adicionar(){ 
    let num = document.getElementById('numtxt')
    num = Number(num.value)
    let tab = document.getElementById('tab')

    if(num <= 0 || num > 100){
        alert('Número inválido! TENTE NOVAMENTE')
    } else {
        if(numeros.indexOf(num) != -1){
            alert('ERRO! Numero já encontrado na lista')
            console.log(numeros.indexOf(num))
        } else {
            let option = document.createElement('option')
            option.innerText = `Valor ${num} adicionado`
            tab.appendChild(option)
            numeros.push(num)

            if (maiorValor < num){
                maiorValor = num;
            }

            if (menorValor == 0){
                menorValor = num;
            } else{
                if(menorValor > num){
                    menorValor = num;
                }
            }

            valoresSomados += num;
        }
    }
}

function finalizar(){
    let msg = document.getElementById('msg')

    msg.innerHTML = ''
    msg.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados</p>`
    msg.innerHTML += `<p>O maior valor informado foi ${maiorValor}</p>`
    msg.innerHTML += `<p>O menor valor informado foi ${menorValor}</p>`
    msg.innerHTML += `<p>Somando todos os valores, temos ${valoresSomados}</p>`
    msg.innerHTML += `<p>A média dos valores digitados é ${valoresSomados/numeros.length}</p>`
}