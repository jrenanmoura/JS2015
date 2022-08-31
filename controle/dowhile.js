function getRecebeValorAutomatico(min, max){
    const receba = Math.random() * (max - min)+ min
    return Math.floor(receba)
}
let num = 0

do {
    num = getRecebeValorAutomatico(-1, 10)
    console.log(`Aparecendo valor aleatorio ${num}.`)
    
}while (num != -1)
console.log('Aprendi')