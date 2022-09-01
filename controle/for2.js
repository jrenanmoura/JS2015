const notas = [6.1, 7.1, 8.1, 9.1, 1.1]
for (let i in notas){
    console.log(i, notas[i])
    }

    const dados = {
        nome: 'Renan',
        idade: '33',
        altura: 'Media',
        peso: 'Acima'
    }

    for(let pessoa in dados){
        console.log(`${pessoa} = ${dados[pessoa]}`)
    }