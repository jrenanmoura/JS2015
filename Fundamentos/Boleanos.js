let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // negação duas vezes true
console.log(!isAtivo)// negação uma vez false
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //colocar dentro de duplo parenteses

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar....')
console.log(!!('' || null || 0 || ' ' ))

let nome = 'Renan' // sem espaço entre as aspas
console.log(nome || 'Desconhecido')// sem o nome entra a alternativa
