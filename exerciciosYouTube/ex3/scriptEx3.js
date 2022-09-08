function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fAno = document.getElementById('txtano')
    const res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano)
    alert('Dados incorretos,tente novamente!')
    else{
        const fsex = document.getElementsByName("radsex")
        const idade = ano - Number(fAno.value)
        document.getElementsByName('nomec')
        var genero= ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero ='Mulher'
        }
        res.innerHTML = `Olá ${nomec.value}!! Você é um(a) ${genero} com ${idade} anos`
    }
}
res.style.textAlign= 'center'
