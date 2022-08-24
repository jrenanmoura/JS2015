function tratarErroELancar(erro){
   // throw new Error('Suporte já acionado')
   //throw 10
   //throw true
   //throw 'Renan Back-end'
   throw{
    nome: erro.name,
    msg: erro.message,
    date: new Date
   }
}

function imprimirNomeGritado (ojt){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
}catch(e){
    tratarErroELancar(e)
    
}finally {
    console.log('final')
}
}
    const obj = {nome: 'Roberto'}
    imprimirNomeGritado(obj)