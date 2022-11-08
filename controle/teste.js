
let primeiro = 0

while (primeiro != 15) {
    primeiro = getInteiroAleatorioEntre(-1, 50) // gerando valores de faturamento aleatoriamente
    console.log(`Faturamento ${primeiro}.`)
    
}


function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)

   
}

function resultados(){
    if (dia >= 30){
    console.log('Menor Valor')
    } else{
        console.log('Maior Valor')
                }
return primeiro + resultados

}
