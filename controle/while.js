function getInteiroAleatorioEntre(min, max){
    const numero = Math.random() * (max - min) + min // usando - e não ,
    return Math.floor(numero)

}

let primeiro = 0

while (primeiro != -1) {
    primeiro = getInteiroAleatorioEntre(-1, 10)
    console.log(`resultado foi ${primeiro}.`) // usando {} não () e usando crase
    
}
console.log('ganhadores')
