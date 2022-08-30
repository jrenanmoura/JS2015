const resultadoProva = function (nota){
    if (nota >= 6){
    console.log('Aprovado Parabéns!!')
    } else{
        console.log('Reprovado Tente de novo!')
    }
}

resultadoProva(6)
resultadoProva(5)
resultadoProva('opa!') // cuidado
