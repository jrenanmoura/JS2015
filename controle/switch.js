const resultadoProva = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
        console.log('Melhor nota')
        break

        case 8: case 7:
            console.log('Aprovado')
            break
            
        case 6: case 5: case 4:
            console.log('Recuperação')
            break

        case 3: case 2: case 1:
            console.log('Reprovado')
            break

        case 0: 
        console.log('procure o professor')    
        break

        default: //use os dois pontos
        console.log('sem nota')

    }
}

resultadoProva(10)
resultadoProva(8.55)
resultadoProva(6.99)
resultadoProva(2.45)
resultadoProva(0)
resultadoProva(11)