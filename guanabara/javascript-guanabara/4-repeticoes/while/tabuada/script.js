function tabuada() {
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    let num = Number(txtnum.value)
    let c = 1
    if (num == 0){
        alert('Por favor, coloque um número válido')
    } else {
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}