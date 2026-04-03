lista = [1, 9, 4, 2, 0, 5, 1, 8]

for(let c = 0; c < lista.length; c++){
    console.log(`A posição ${c} tem o valor de ${lista[c]}`)
}

console.log('ARRUMANDOOOOOO ')

lista.sort()

for(let item in lista){
    console.log(`A posição ${item} tem o valor de ${lista[item]}`)
}