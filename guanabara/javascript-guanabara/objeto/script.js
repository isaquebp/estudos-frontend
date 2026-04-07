let pessoa = {
    nome: 'isaque',
    idade: 21,
    sexo: 'M',
    peso: 83,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

console.log(`O peso é ${pessoa.peso}kg`)
pessoa.engordar(2)
console.log(`O peso agora é ${pessoa.peso}`)
pessoa.engordar(10)
console.log(`O peso agora é ${pessoa.peso}`)