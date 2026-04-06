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
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')

    p1.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados`
    p2.innerHTML = `O maior valor informado foi ${maiorValor}`
    p3.innerHTML = `O menor valor informado foi ${menorValor}`
    p4.innerHTML = `Somando todos os valores, temos ${valoresSomados}`
    p5.innerHTML = `A média dos valores digitados é ${valoresSomados/numeros.length}`

    msg.appendChild(p1)
    msg.appendChild(p2)
    msg.appendChild(p3)
    msg.appendChild(p4)
    msg.appendChild(p5)
}