function gerar(){
    num = document.getElementById('numtxt')
    num = Number(num.value)
    tab = document.getElementById('tab')
    c = 1;

    tab.innerHTML = '';
    while (c <= 10){
        option = document.createElement('option')
        option.innerHTML = `${num} x ${c} = ${num * c}`
        tab.appendChild(option)
        c++
    }
}