

//contador que acrescenta ou decrescentade acordo com valor informado
function contar(){
    let ini = document.getElementById('txtin')
    let fi = document.getElementById('txtfi')
    let pass = document.getElementById('txtpa')
    let res = document.getElementById('res')
    res.innerHTML= `Contando...`
    
    let i = Number(ini.value)
    let f = Number(fi.value)
    let p = Number(pass.value)
    
    //CONTAGEM CRESCENTE
    for(let a = i ; a <= f ; a += p){
    res.innerHTML += `${a},`
}
    //CONTAGEM DECRESCENTE
    for(let a = i ; a >= f ; a -= p){  
    res.innerHTML += `${a} \u{1F603}`
}
}


